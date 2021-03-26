// Only change code below this line
let fifteenArray = [];

function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();
}

function* insideGenerator1() {
   for ( i = 1; i <= 5; i++) {  
     let x = i;
    yield x;
   }
}

function* insideGenerator2() {
  for ( i = 10; i <= 15; i++) {   
     let x = i;
    yield x;
  }
}

function* insideGenerator3() {
  for ( i = 6;i <= 9; i++) {   
     let x = i;
    yield x;
  }
}

var iterator = myGenerator();

for (let i=0;i<16;i++){
  fifteenArray.push(iterator.next().value);
}

console.log(fifteenArray.join('#, '));
// Only change code above this line
module.exports = { fifteenArray, myGenerator};