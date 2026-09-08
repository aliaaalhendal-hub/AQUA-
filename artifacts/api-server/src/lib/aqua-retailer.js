const productPattern = /<h4[^>]*>\s*<a[^>]*product-details\.php\?id=(\d+)[^>]*>([\s\S]*?)<\/a>\s*<\/h4>[\s\S]{0,1000}?KD\s*([0-9]+(?:\.[0-9]+)?)/gi;

export function parseAquamarineProducts(html) {
  return [...html.matchAll(productPattern)]
    .map((match) => ({
      id: match[1],
      name: match[2].replace(/<[^>]+>/g, "").replace(/&amp;/g, "&").trim(),
      category: "Food",
      store: "Aquamarine Exotic Farm",
      priceKwd: Number(match[3]),
      availability: "unknown",
      listingUrl: `https://aquamarineexotic.com/product-details.php?id=${match[1]}`,
    }))
    .filter(
      (item, index, all) =>
        item.name && all.findIndex((other) => other.id === item.id) === index,
    );
}