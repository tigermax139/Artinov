var time = performance.now();


var num = prompt("Enter your number","");
var n = 0; //лічильник кількості дільників
for( var p = 1; p<=(num/2) ; p++){
     for(var i = 1; i<=p; i++){
//         console.log(p + " / " + i );
        if((p%i) == 0){
        n = n+1;
//         console.log(p +" / "+ i +"       "+p%i + "       "+n);
        }
         
     }
    if(n<=2){
        console.log(p);
        n = 0;
    }else{
        n = 0;
    }
}



time = (performance.now() - time);
console.log('Время выполнения = ', time + " mks");