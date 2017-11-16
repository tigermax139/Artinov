//Написати 2 функції які відповідно визначають мінімальні 
//і максимальні елементи числових масивів.
//                 MAX 

 var Arr = [20,30,50,1,8,-1,49];
 console.log(Arr);

function maxArr(Array) {
	var max = 0;
 	for(var i = 0; i<Array.length;){
 		if(max < Array[i]){
 			max = Array[i];
 			i++;
 		}else{
 			i++;
 		}
 	}
 	console.log("max number is ", max);
 }
 maxArr(Arr); 
 
 //                 MIN
 function minArr(Array) {
	var min = 0;
 	for(var i = 0; i<Array.length;){
 		if(min > Array[i]){
 			min = Array[i];
 			i++;
 		}else{
 			i++;
 		}
 	}
 	console.log("min number is ", min);
 }
 minArr(Arr); 
