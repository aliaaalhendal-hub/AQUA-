import { Router, type IRouter } from "express";
import { ReplitConnectors } from "@replit/connectors-sdk";
import { ListAquaProductsResponse } from "@workspace/api-zod";
import { parseAquamarineProducts } from "../lib/aqua-retailer.js";

const router: IRouter = Router();
const SOURCE_URL = "https://aquamarineexotic.com/product.php?id=26";
const AQUA_TEST_PRICE_ID = "price_1UDXsCPtvWcqG5NOH3Irkpux";

router.get("/aqua/products", async (req, res): Promise<void> => {
  try {
    const response = await fetch(SOURCE_URL, { headers: { "user-agent": "AQUA care planner/1.0" }, signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw new Error(`Retailer returned ${response.status}`);
    const html = await response.text();
    const products = parseAquamarineProducts(html);
    if (!products.length) throw new Error("Retailer returned no readable listings");
    res.json(ListAquaProductsResponse.parse({ products, sourceName: "Aquamarine Exotic Farm", sourceUrl: SOURCE_URL, fetchedAt: new Date().toISOString() }));
  } catch (error) {
    req.log.warn({ error: error instanceof Error ? error.message : "Unknown retailer error" }, "AQUA retailer feed unavailable");
    res.status(503).json({ error: "Live Kuwait prices are temporarily unavailable. No cached or demo prices are shown." });
  }
});

router.post("/aqua/checkout", async (req, res): Promise<void> => {
  const origin = req.get("origin") || req.headers.origin || (req.get("referer") ? new URL(req.get("referer")!).origin : undefined);
  const returnPath = typeof req.body?.returnPath === "string" ? req.body.returnPath : "";

  if (!origin || !returnPath.startsWith("/") || returnPath.startsWith("//")) {
    res.status(400).json({ error: "A valid checkout return path is required." });
    return;
  }

  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    req.log.warn("STRIPE_SECRET_KEY environment variable is not set");
    res.status(502).json({ error: "Stripe is not configured. Please add STRIPE_SECRET_KEY in Render Environment Variables." });
    return;
  }

  try {
    const body = new URLSearchParams();
    body.set("mode", "payment");
    body.set("line_items[0][price_data][currency]", "usd");
    body.set("line_items[0][price_data][product_data][name]", "AQUA Sample Item");
    body.set("line_items[0][price_data][unit_amount]", "100");
    body.set("line_items[0][quantity]", "1");
    body.set("success_url", `${origin}${returnPath}?checkout=success`);
    body.set("cancel_url", `${origin}${returnPath}?checkout=cancelled`);
    body.set("metadata[aqua_test_checkout]", "true");

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": `Bearer ${stripeKey}`,
      },
      body: body.toString(),
    });

    const session = await response.json() as { url?: string; error?: { message?: string } };

    if (!response.ok || !session.url) {
      throw new Error(session.error?.message ?? "Stripe did not return a checkout URL.");
    }

    res.json({ url: session.url });
  } catch (error) {
    req.log.error(
      { error: error instanceof Error ? error.message : "Unknown Stripe error" },
      "AQUA test checkout session creation failed",
    );
    res.status(502).json({ error: error instanceof Error ? error.message : "Stripe Checkout is temporarily unavailable." });
  }
});

export default router;
