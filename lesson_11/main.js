console.log("Main.js");

var game = new Game();
var speed = prompt("Enter speed for game; min=100, max=600","350");
var _speed;
if (speed < 100){
	_speed = 100;
}else if (speed > 600){
	_speed = 600;
}else{
	_speed = speed;
}
setInterval(function(){
	game.update();
}, _speed);


// var dot = 
// dot.down();
// dot.right();
// console.log(dot.getX(),dot.getY());

