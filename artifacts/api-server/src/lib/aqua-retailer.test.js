import assert from "node:assert/strict";
import test from "node:test";
import { parseAquamarineProducts } from "./aqua-retailer.js";

const productCard = `
  <h4><a href="product-details.php?id=2039">Goldfish Food &amp; Color</a></h4>
  <div class="price-box"><span class="regular-price">KD 4.500</span></div>
  <a href="product-details.php?id=2039" class="btn-cart">Buy Now</a>
`;

test("parses a public price without inventing availability", () => {
  assert.deepEqual(parseAquamarineProducts(productCard), [{
    id: "2039",
    name: "Goldfish Food & Color",
    category: "Food",
    store: "Aquamarine Exotic Farm",
    priceKwd: 4.5,
    availability: "unknown",
    listingUrl: "https://aquamarineexotic.com/product-details.php?id=2039",
  }]);
});

test("deduplicates repeated retailer cards", () => {
  assert.equal(parseAquamarineProducts(productCard + productCard).length, 1);
});

test("returns no listings for changed or malformed markup", () => {
  assert.deepEqual(parseAquamarineProducts("<h4>Catalog unavailable</h4>"), []);
});