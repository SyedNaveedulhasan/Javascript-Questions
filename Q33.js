const products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 700 },
    { name: 'Monitor', price: 300 }
];

products.sort((a, b) => b.price - a.price);

console.log(products);
