// Change code only below this line
var generatorArray = [];

function* myGenerator(x, y, z){
    yield* [1, 2, 3, 4, 5];
    yield* "Arena";
    yield* [x, y, z];
}

var iteration = myGenerator(6, 7, 8);

    for (let i=0;i<14;i++){
        generatorArray.push(iteration.next().value);
    }
    console.log(generatorArray);

// Change code only above this line
module.exports = { generatorArray, myGenerator };