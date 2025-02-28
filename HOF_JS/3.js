
const items = [
    {
        name: "Iphone 15",
        category: "Mobile",
        priceUSD: 999,
    },
    {
        name: "Macbook Air",
        category: "Laptops",
        priceUSD: 1499,
    },
    {
        name: "Apple Watch",
        category: "Watches",
        priceUSD: 499,
    },
];
const exchangeRate = 80;

function convertToINR(priceInUSD) {
    return priceInUSD * exchangeRate;
}

const itemsInINR = items.map((item) => ({
    
    priceINR: convertToINR(item.priceUSD),
}));

console.log(items);
console.log(itemsInINR);