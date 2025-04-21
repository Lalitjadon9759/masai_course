const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];

const categoryCounts = categories.reduce((acc, category) => {
  acc[category] = (acc[category] || 0) + 1;
  return acc;
}, {});

console.log(categoryCounts);
