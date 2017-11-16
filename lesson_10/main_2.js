console.log("Main_2.js");

var game_2 = new Game_2();
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
	game_2.update();
}, _speed);