var watter = prompt("Enter temperature your watter","");

if (watter>-273){
        if(watter<=0){
        console.log("температура дорівнює", watter, "це лід");
        alert("look in consol)");
    }else{
            if (watter>0 && watter<100){
               console.log("температура дорівнює", watter, "це рідина"); 
                alert("look in consol)");
            }else{
                console.log("температура дорівнює", watter, "це газ");
                alert("look in consol)");}       
            }
}else{
    console.log("min temperature is -273 ");
    alert("min temperature is -273 ");
}