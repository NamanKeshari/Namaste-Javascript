const products = [
  { name: "apples", category: "fruits" },
  { name: "oranges", category: "fruits" },
  { name: "potatoes", category: "vegetables" },
];

Array.prototype.groupBy = function (key) {
  const arr = this;

  return arr.reduce((acc, product) => {
    acc[product[key]] = acc[product[key]] ?? [];
    acc[product[key]].push(product);
    return acc;
  }, {});
};

console.log(products.groupBy("category"));
