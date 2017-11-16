// console.log("main1.js");



// // var dot = new Dot();

// // dot.up().up().down();

// for (let i = 1; i <= 5; i++){
// 	setTimeout(function(){
// 		console.log(i);
// 	},i*150);
// // }

// const PI = {
// 	name: "ALex",
// 	age: 28
// };

// objConst.name = "Ivan";

// let arrNames = ["Alex", "Ivan", "Ira"];

// let [name1, name2, name3] = arrNames;
// console.log(name1, name2, name3);

// let name = "Alex";
// let age = 28;
// let city = "Vinnitsya"

// let obj = {
// 	name,
//  	age,
// 	city
// }
// console.log(obj);

// var obj = {
// 	test: "Hello",
// 	test2: 355,
// 	a: true,
// 	arr: [9,8,7,6],
// 	lastname: "Pavluk",
// 	sum: function(a,b) {
// 		return a+b;
// 	},
// 	powTo2: a => a*a
// }

// // console.log(obj);

// // let {arr: [, ,number]} = obj;

// // console.log(number);

// function a ({test = "Anonimmus", lastname = "Anonim"}) {
	
// 	console.log(test, lastname);
// }
// //a(obj);

// console.log(obj.sum(7,3));
// console.log(obj.powTo2(7));


// function Dot() {
// 	this.init = function() {
// 	}
// 		this.up = function() {
// 			console.log("up");
// 			return this;
// 		};
// 		this.down = function() {
// 			console.log("down");
// 			return this;
// 		};
// 	this.init;
// }

// class NewDot{

// 	up() {
// 			console.log("up");
// 	}
// 	down() {
// 			console.log("down");
// 	}
// }
// let newDot = new NewDot();
// newDot.up();

class Animal {
	constructor(name){
		this.name = name;
//		this.food;
	}
	eat() {
		console.log(`${this.name}  eating ${this.food}`);
	}
	sleep() {
		console.log(this.name + " Animal sleeping");
	}

	// get food(){
	// 	return this.food;
	// }
	// set food(){
	// 	this.food = value;
	// }
	say(){
		console.log("Any sound");
	}

}

let anim = new Animal("Tom");

//anim.eat();

class Cat extends Animal {

}