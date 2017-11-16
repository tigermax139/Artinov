//var isAdmin = confirm("are you admin?");
//var age = prompt("how old are you?", 18);
//if (isAdmin&&(age>=18)){
//    alert("congratulation you are admin");
//}else if (age<18){
//    alert("you are little boy)")
//}
//else{
//    alert("you are not admin");
//}
//
//console.log(age);

//
//function firstFunction(){
//    console.log("hi!");
//    var a = 2;
//    var b = 3;
//    var sum = a + b;
//    console.log(sum);
//}
//firstFunction();
//
//function secondFunction(){
//    console.log("second");
//    functionInFunction();
//    
//    function functionInFunction(){
//        console.log("local function");
//    };
//}
//secondFunction();

//function hiUser(userName, userAge){
//    alert("Hello, " + userName +" you age "+ userAge);    
//    if (userAge===undefined){
//        userAge = "nothing";
//    }
//}
//var name = prompt("enter your name", "");
//var age = prompt("enter your age", "");
//hiUser(name,age);

//function volume(a,b,c){
//    var result = a*b*c;
//     console.log("V= " + result);
//    
//    var D = b*b - 4*a*c;
//    console.log("D= "+D);
//}
//volume(10,15,0.5);
//volume(10,0.5,15);
//
//var coube = {
//    length: 10,
//    height: 20,
//    width: 30
//}
//function volume(obj){
//    var V = obj.length * obj.height * obj.width;
//    console.log("V= "+ V);
//    return V;
//}
//volume(coube);
//
//function randomAge(start, end){
//    var r = Math.round(start + Math.random()*(end-start));
//    return r;
//    
//}
//
//
//
//var kings = [];
//for (var i = 0; i<10; i++){
//    kings[i] = {
//        name: "Karl " + i,
//        age: randomAge(18, 100)
//    }
//}
//for(var i = 0; i < kings.length ; i++){
//    if(kings[i].age>=40){
//        console.log(kings[i]);
//    }
//}
//
var array = [4,7,8,5,6,7,2];
//
//var min = array[0];
//var indexMin = 0;
//var newIndexMin = 0;
//
//for (var i = 0; i < array.length; i++){
//    if(array[i]<min){
//        min = array[i];
//        indexMin = i;
//    }
//}
//
//array[indexMin] = array[newIndexMin];
//indexMin = newIndexMin;
//
//console.log(min, indexMin);

var sortArray = array.sort();


console.log (sortArray);

sortArray.forEach(function(item, i){
                  console.log("item= "+ "[" + i + "]"+ item);
                  });


var powArray = sortArray.map(function(item, i){
    return item*item;
});


var powArray2 = powArray;

powArray2[2] = "Hello";

console.log(powArray);
console.log(powArray2);
















