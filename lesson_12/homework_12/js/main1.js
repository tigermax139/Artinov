console.log("main.js");
	//transform: translate(1280px);
let buttonNext = $(".next");
let buttonPrev = $(".prev");
let slide = $(".slide-jQuery ul");
let step = 1200;

function generalCarousel(){
	let counter = 1;
	let stepMod = -1*(step*counter);

	function carouselAuto (){
		// let counter = 1;
		// let stepMod = -1*(step*counter);
			setInterval( function(){
				if (counter==6){
					counter = 0;
					stepMod = -1*(step*counter);
					slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
					console.log("click <<<", counter, stepMod);
					return counter;
				}else{
					stepMod = -1*(step*counter);
					slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
					counter++;
					console.log("click >>>", counter, stepMod);
					return counter;
				}
			}, 5000);
	};

	slide.hover(
		function carousel (){
			// let counter = 1;
			// let stepMod = step*counter;
			buttonNext.click(function() {
				if(counter==6){
					console.log("i cant this");
				}else{
					stepMod = -1*(step*counter);
					slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
					counter++;
					console.log("click >>>", counter, stepMod);
					return counter;
				}
				
			});
			buttonPrev.click(function() {
				if (counter==1){
					console.log("i cant this");
				}else{
						stepMod = stepMod+step;
						slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
						counter--;
						console.log("<<< click", counter, stepMod);
						return counter;
				}
			});
		}
	)
}
generalCarousel();


// function carouselAuto (){
// 	let counter = 1;
// 	let stepMod = -1*(step*counter);
// 		setInterval( function(){
// 			if (counter==6){
// 				counter = 0;
// 				stepMod = -1*(step*counter);
// 				slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
// 				console.log("click <<<", counter, stepMod);
// 			}else{
// 				stepMod = -1*(step*counter);
// 				slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
// 				counter++;
// 				console.log("click >>>", counter, stepMod);
// 			}
// 		}, 5000);
// };
// carouselAuto();

// slide.hover(
// 	function carousel (){
// 		let counter = 1;
// 		let stepMod = step*counter;
// 		buttonNext.click(function() {
// 			if(counter==6){
// 				console.log("i cant this");
// 			}else{
// 				stepMod = -1*(step*counter);
// 				slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
// 				counter++;
// 				console.log("click >>>", counter, stepMod);
// 			}
			
// 		});
// 		buttonPrev.click(function() {
// 			if (counter==1){
// 				console.log("i cant this");
// 			}else{
// 					stepMod = stepMod+step;
// 					slide.css({"transform":"translateX("+stepMod+"px)", "transition":"1s"});
// 					counter--;
// 					console.log("<<< click", counter, stepMod);
// 					}
// 		});
// 	}
// )


