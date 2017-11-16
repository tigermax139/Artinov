 //Написати функцію яка повинна повертати випадкові імена.
 // Імена повинні бути записані в масиві. Мінімум має бути 8 імен.
var nameArray = ["Alex", "Hofman", "Ben", "Daniel", "Oxy", "David", "Pesto", "Crabolina"];
 console.log(nameArray);
 function randomName (Array) {
 	var i = Math.floor(Math.random()*Array.length);
 	console.log(Array[i]);
 }
 randomName(nameArray);
/*
					   ДОПОМОГА!!!!!
		Функція нижче виводить лише одну букву з слова, питання чому???
		І в чому різниця між length >>>>>>та>>>>>>> lenght  крім останніх двох букв???



var name = ["Alex", "Hofman", "Ben", "Daniel", "Oxy", "David", "Pesto", "Crabolina"];
console.log(name);
function random(Array) {
	var i = Math.floor(Math.random() * Array.length);
	console.log(Array[i]);
}
random(name);


*/