/*Дано на вході массив чисел, наприклад: arr = [1,2,3,4,5].
Напишіть функцію getSums (arr), яка повертає масив його часткових сум.
Іншими словами, виклик getSums (arr) повинен повертати новий масив з 
того ж числа елементів, в якому на кожній позиції повинна бути 
сума елементів arr до цієї позиції включительно.*/
var arr1 = [1,2,3,4,5];
console.log("Started array:",arr1);
var arr2 = [];


function getSums(Array1,Array2) {
	for (var i = 0; i < Array1.length;) {
		if(i == 0){
			Array2[i] = Array1[i];
			i++;
		}else{
			Array2[i] = Array1[i]+Array2[i-1];
			i++;
		}
	}
	console.log("Finished array:",Array2);
}

getSums(arr1, arr2);