var king = [];
for(var i = 0; i<10; i++){
    king[i] = {
        name: "Karl",
        number: i,
        age: Math.floor(Math.random()*140+10)
    }
    if(king[i].age > 40){
        console.log(king[i].name +" "+ king[i].number + " has " + king[i].age + " this is over 40")
    }
}
console.log("Show all king Karl below");
console.log(king);

