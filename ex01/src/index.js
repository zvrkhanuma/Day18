let myArr = [];
// Only change cod below this line

function* multiplicator(x){
    for ( i=0; i<3; i++){
    x *= 2;
    myArr.push(x);
    yield x;
}
return x;
}
var num = multiplicator(3);

for (number of num){
    console.log(number);
}
// Only change code above this line
module.exports = multiplicator;