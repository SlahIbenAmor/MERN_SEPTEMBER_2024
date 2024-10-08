// GIVEN
//console.log(example);
//var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";
//console.log(example);
//let example = "I'm the example!";    

//1
console.log(hello);                                   
var hello = 'world';                                   
//var hello;
//console.log(hello); //logs undefine
//hello='world';

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}
//var needle = 'haystack';
//function test(){
//    var needle = 'magnet';
//    console.log(needle);
//}
//test(); //logs magnet

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//logs super cool

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//logs chiken
//logs half-chicken

//5

// var mean
//mean()
//error : mean is not a fuction

//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// logs undifene
// logs rock
// logs r&b
// logs disco

//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// logs san jose
// logs seattle
// logs burbank
// san jose
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//logs {name:'chicago', students: 65, hiring: true}
//logs error 