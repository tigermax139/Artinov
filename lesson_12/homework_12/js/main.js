console.log("main.js");
	//transform: translate(1200px);
let buttonNext = $(".next");
let buttonPrev = $(".prev");
let slide = $(".slide-jQuery ul");
let slideAuto = $(".slide-auto ul");
let step = 1200;

function carouselAuto (){
		let counterAuto = 1;
		let stepModAuto = -1*(step*counterAuto);
	    setInterval( function(){
				if (counterAuto==6){
					counterAuto = 0;
					stepModAuto = -1*(step*counterAuto);
					slideAuto.css({"transform":"translateX("+stepModAuto+"px)", "transition":"1s"});
					console.log("click <<<", counterAuto, stepModAuto);
				}else{
					stepModAuto = -1*(step*counterAuto);
					slideAuto.css({"transform":"translateX("+stepModAuto+"px)", "transition":"1s"});
					counterAuto++;
					console.log("click >>>", counterAuto, stepModAuto);
				}
			}, 2000)
}
carouselAuto();
slide.hover(
	function carousel (){
		let counter = 1;
		let stepMod = step*counter;
		buttonNext.click(function() {
			if(counter==6){
				counter = 0;
				stepMod = -1*(step*counter);
				slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
			}else{
				stepMod = -1*(step*counter);
				slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
				counter++;
				console.log("click >>>", counter, stepMod);
			}
			
		});
		buttonPrev.click(function() {
			if (counter==1){
				counter = 5;
				stepMod = -1*(step*counter);
				slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
			}else{
					stepMod = stepMod+step;
					slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
					counter--;
					console.log("<<< click", counter, stepMod);
					}
		});
	}
)


