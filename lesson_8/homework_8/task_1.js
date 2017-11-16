// Написати функцію аргументами якої є масив та нове значення. 
// Функція повинна повертати масив з цим значенням на кінці.
 function addEnd(Array, element) {
 	Array.push (element);
 }
 var arr = [1,2,3,4];
 addEnd(arr, 50);
 console.log(arr);

