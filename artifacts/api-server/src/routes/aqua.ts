import { Router, type IRouter } from "express";
import { ListAquaProductsResponse } from "@workspace/api-zod";
import { parseAquamarineProducts } from "../lib/aqua-retailer.js";

const router: IRouter = Router();
const SOURCE_URL = "https://aquamarineexotic.com/product.php?id=26";

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

export default router;
