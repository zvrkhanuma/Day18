// Only change code below this line
let rockStar = new Map([
    ["artist", "The Rolling Stones"],
    ["song", "Angie"],
    ["album", "Goats Head Soup"],
    ["singer", "Mick Jagger"]
]);

let newRock = new Map([]);

for(let e of rockStar.entries()){
  if(e[0][0] > 'a') {
  newRock.set(e[0], e[1]);
  }
}

var entries = [];
for(let e of newRock.entries()){
  entries.push(`${e[0]}' => '${e[1]}`);
}
console.log(`{${entries.join(', ')}}`);
// Only change code above this line
module.exports = { rockStar, newRock };