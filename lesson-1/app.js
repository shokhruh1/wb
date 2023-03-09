//1-exem
// let word = "hello".split("")
// console.log(word);
// 2-exem

let userPurchasedItems = [
  {
    itemName: "PS5",
    price: 7500,
  },
  {
    itemName: "iPhone 14 pro",
    price: 1600,
  },
  {
    itemName: "Gaming Chair",
    price: 2500,
  },
  {
    itemName: "VR",
    price: 1020,
  },
];
// 1 WAY reduce
let { price } = userPurchasedItems.reduce((a, b) => ({
  price: a.price + b.price,
}));
console.log(price);
// 2way map
let totallll = userPurchasedItems.map((i) => i.price).reduce((a, b) => a + b);
console.log(totallll);
