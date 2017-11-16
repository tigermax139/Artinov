var table = document.createElement("table");
	table.setAttribute('class', 'display');
	table.setAttribute('id', 'table_id');
var container = document.getElementById("content");
var controler = document.getElementById("controler");

var button = document.getElementById("generate");
var countRow;
var countCol;
var bgColor = "black";

// CAtch the value
function catchR(a){
	countRow = a;
}
function catchC(a){
	countCol = a;
}
function catchColor(a){
	bgColor = String(a);
	console.log(bgColor);
}
// CREATE TABLE!
var n = 0;
button.onclick = function() {


	if(n == 0) {
				for (var i = 0; i < countRow; i++){
					var tr = document.createElement("tr");
						for (var j = 0; j < countCol; j++){
							var td = document.createElement("td");
							td.setAttribute("id", "td"+j+"_"+i);
							tr.appendChild(td);

						td.onmouseover = function(){
							this.style["background"] = bgColor ;
							 }	



						}
					table.appendChild(tr);	
	    		}
	container.appendChild(table);
	n++;	
	}else {

		   var oneChild;
		   var mainObj = document.getElementById("table_id");
		   while (mainObj.childNodes.length > 0) {
		      oneChild = mainObj.lastChild;
		      mainObj.removeChild(oneChild);
		}

		for (var i = 0; i < countRow; i++){
					var tr = document.createElement("tr");
						for (var j = 0; j < countCol; j++){
							var td = document.createElement("td");
							td.setAttribute("id", "td"+j+"_"+i);
							tr.appendChild(td);

							td.onmouseover = function(){
							this.style["background"] = bgColor ;
							 }	

						}
					table.appendChild(tr);	
	    		}
	container.appendChild(table);
	n++;
	}
	 
}

