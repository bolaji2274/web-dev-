// document.getElementById("myButton").onclick = function(){
//     var myName = document.getElementById("myText").value;
//     console.log("Hello",myName);
// }

function hello(name){
    console.log(`Hello mr ${name}, how are you doing`);
};

hello("Bolaji Hammed");

var human = {
    name: "Bolaji",
    age: 20,
    description: function(){
        console.log("Mr Bolaji is a nice guy");
    },
    background: function(){
        console.log(`${human.name} is from Town A`)
    },
    living: function(){
        console.log("He is living at Osun state")
    }
};

console.log(human.background());

var bolaji1 = {
    firstName: "Bolaji",
    lastName: "Hammed",
    age: function(nums){
        if(nums > 18){
            console.log(`${bolaji1.firstName} is an adult`);
        }
        else{
            console.log(`${bolaji1.firstName} is still young`);
        }
    }
}

// console.log(bolaji1.age(18));
var surname = ["Okiki","Olanrewaju","Adeyemo","Olasupo","Olaitan"];

// console.log(surname);

let lens = surname.length;

var names = ["Bolaji","Hammed","Alabi","Opeyemi","Oke"];
// console.log(names);
var nums = names.length

for (let i = 0; i < lens; i++){
    names[(nums) + i] = surname[i];
}

console.log(names);

let num = names.length;
for (i = 0; i < num; i++){
    console.log(names[i])
}


var number = 22;
if (number > 23){
    console.log(`${number} is greater than 23`);
}
else if (number == 23){
    console.log(`${number} is equal to 23`);
}
else {
    console.log(`${number} is less than 23`);
}

var grade = "C";

switch (grade){
    case "A":
        console.log("You did great");
        break;

    case "B":
        console.log("You did good");
        break;
    case "C":
        console.log("You did okay");
        break;
    case "D":
        console.log("You .. . did not do that well");
        break;
    case "F":
        console.log("YOU FAILED!");
        break;
    default:
        console.log(grade,"is not a letter grade");
}
//&& and || or
var temperature = 11;
if (temperature > 30){
    console.log("It's HOT outside");
}
else if (temperature > 12 && temperature == 15){
    console.log("Temperature is in normal condition");
}
else {
    console.log("Temperature is cold");
}


var myName = window.prompt("Enter your name");

var lengthOfName = myName.length
console.log(lengthOfName);

var list = myName.split(' ')

console.log(list.length)

console.log(`My name is ${myName}`);

var myNumber = window.prompt("Enter your number seperated with comma");
var myNumberLength = myNumber.split(',');
var myNumberSort = myNumberLength.sort()
var lengthOfMyNumber = myNumberLength.length;

for (let i = 0; i < lengthOfMyNumber; i++){
    console.log(myNumberSort[i]);
}