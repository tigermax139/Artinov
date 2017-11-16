// var p = document.getElementById('firstParagraph0');
// var arrayP = document.getElementsByClassName('pClass');

// console.log(arrayP.length);

// for (var i = 0; i < arrayP.length; i++) {
//  	arrayP[i].setAttribute('data-name', i);
//  	console.log(arrayP[i].innerHTML);
// // 	arrayP[i].innerHTML = i;
// }

var table = document.createElement("table");
	table.setAttribute('class', 'display');
var container = document.getElementById("content");
var show = document.getElementById('show');
var _show;
var countRow = 10;
var countCol = 10;

for (var i = 0; i < countRow; i++){
	var tr = document.createElement("tr");
	for (var j = 0; j < countCol; j++){
		var td = document.createElement("td");
//		var on = document.getAttribute("class");
		td.setAttribute("id", "td "+j+"_"+i);
		tr.appendChild(td);
//start color
//		var on = td.getAttribute("class");
	td.onmouseover = function(){
		var on = this.getAttribute("class");
		 _show = this.getAttribute("id");
		console.log(_show);
		show.setAttribute("value", _show);
	}
	td.onmouseout = function(){
		show.setAttribute("value", "наведите курсор");
	}
	td.ondblclick = function(){
			var on = this.getAttribute("class");
	
			console.log(on);

			if((on == "")){
				this.setAttribute("class", "active-g");
			} else if(on == "active-g"||(on == "active")) {
				this.setAttribute("class", "");
			} 
		}
	td.onclick = function(){
			var on = this.getAttribute("class");		
			if ((on == "active-g")||(on == "active")){
				this.setAttribute("class", "");
			}else {
				this.setAttribute("class", "active",);
			}
}
// end color
	}
	table.appendChild(tr);
}
container.appendChild(table);

/*			var on = this.getAttribute("class");
			console.log(on);
			if(on == "active" || "") {
				this.setAttribute("class", "active-g",);
			}else {
				this.setAttribute("class", " ");
			}
		}
td.onclick = function(){
			console.log(on);
			var on = this.getAttribute("class");		
			if (on == "active"){
				this.setAttribute("class", "");
			}else {
				this.setAttribute("class", "active",);
			}
}
*/