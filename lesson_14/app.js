console.log("This is Node.js");
// console.log(global);
// function getValue(key) {
//     let index = process.argv.indexOf(key);
//     if (index === (-1)) {
//     return null;
// } else {
//     return process.argv[index + 1];
// }
// }
// let d1 = getValue("-d1");
// let d2 = getValue("-d2");
//
// console.log(d1 - d2);

/********LOGINATOR*********/
let name = getValue("-n");
let pass = getValue("-p");

console.log("name= ", name, "pass= ", pass);

let db = [];
db.push({name: "Ivan", pass: "gggg"});
db.push({name: "Petro", pass: "12358"});
db.push({name: "Pavlusha", pass: "qwerty"});
db.push({name, pass});

let string = JSON.stringify(db);

console.log(db);
console.log(string);