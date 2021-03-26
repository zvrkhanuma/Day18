// Only change code below this line
let arrKey = [];
let arrValue = [];

let shoppingList = new Map([
    ["Banana", 3],
    ["Pineapple", 5],
    ["Pear", 2],
    ["Carrot", 10],
    ["Apple", 1.5]
]
)

for(let e of shoppingList.entries()){
  arrKey.push(e[0]);
  arrValue.push(e[1]);
}

for(let i=0;i<arrKey.length;i++){
  console.log(`groceries: ${arrKey[i]}`);
}

for(let i=0;i<arrValue.length;i++){
  console.log(`amount: ${arrValue[i]}`);
}

for(let e of shoppingList.entries()){
  console.log(`[${e[0]}, ${e[1]}]`);
}
// Only change code above this line
module.exports =  { shoppingList, arrKey, arrValue };