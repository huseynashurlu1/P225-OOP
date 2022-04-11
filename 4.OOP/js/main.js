// var ad = "Vusal";
// var firstName = new String("Vusal");

// var num = 20;
// var new_num = new Number("20");

// var isStudent = false;
// var isWorker = new Boolean(true);

// var time = new Date();
// var random_num = Math.random();


// let Person = {
//     SeriyaNo: 123456,
//     firstName: "Vusal",
//     lastName: "Imanov",
//     fullName: function(){
//         return this.firstName + " " + this.lastName
//     },
//     age: 25,
//     address: {
//         city: "Baku",
//         street: "Nizami st"
//     },
//     getAddress: function() {
//         return this.address.city + " / " + this.address.street;
//     }
// }

// Person.firstName = "Onur";
// console.log(Person['firstName']);
// console.log(Object.values(Person));

// console.log(this);



// for(let prop in Person) {
//     document.write(Person[prop] + "<br>");
// }

// Person.height = 180;

// console.log(Person.height);
// console.log(Person.age);
// console.log(Person["age"]);
// console.log(Person.address.city + " / " + Person.address.street)

// let students = [
//     {name: "Onur",age:20},
//     {name: "Vusal",age:25},
//     {name: "Murad",age:21},
//     {name: "Vusal",age:22},
// ]
// console.log(students[2]);


// var z = new Object();

// z.name = "JS Fundamentals";
// z.count = 500;

// var x = z;
// x.name = "C# Fundamentals";


// let Person = {
//     SeriyaNo: 123456,
//     firstName: "Vusal",
//     lastName: "Imanov",
//     fullName(){
//         return this.firstName + " " + this.lastName
//     },
//     address: {
//         city: "Baku",
//         street: "Nizami st"
//     },
//     getAddress: function() {
//         return this.address.city + " / " + this.address.street;
//     }
// }

// // Object.freeze(Person);
// Person.age = 25;
// console.log(Person.hasOwnProperty("firstame"));
// // console.log(Person.firstName);
// // console.log(Person.lastName);
// // console.log(Person.fullName);
// // console.log(Person.fullName());


// // function Person(id,ad,yas) {
// //     this.id = id;
// //     this.ad = ad;
// //     this.yas = yas;
// //     function getName(){

// //     }
// // }

// // Person.prototype.getName = function(){

// // }

// // let Developer = new Person(1,"Vusal",25);
// // Developer.height = 180;
// // let Designer = new Person(2,"Ismayil",23);
// // console.log(Developer.height)
// // console.log(Designer)

// // let Developer = {
// //     id: 1,
// //     ad: "Vusal",
// //     yas: 25
// // }

// // let Designer = {
// //     id: 1,
// //     ad: "Vusal",
// //     yas: 25
// // }


// // class Person{
// //     constructor(id,name,age) {
// //         this.id = id;
// //         this.name = name;
// //         this.age = age;
// //     }
// // }

// // let Developer = new Person(1,'Murad',25);


// // class Course{

// // }

// // function Course() {

// // }


// var student = {
//     firstName: "Vusal"
// };
// Object.defineProperty(student,"firstName",{value: "Vusal"});

// let Developer = {
//     id: 1,
//     ad: "Vusal",
//     yas: 25
// }

// console.log(Object.values(Developer));


// var front_end = ['html','css','js'];
// var back_end = ['c#','sql','azure server'];

// var full_stack = ['c# fundamentals','english',...front_end,...back_end];
// console.log(full_stack);

// let numbers = [1,11,22,33,44,55,66,77,88,99];
// console.log(Math.max(...numbers));


// function Hesabla(x,y,z) {
//      console.log(x*y*z);
// }


// let arr = [10,20,30]
// Hesabla(...arr);
// Hesabla(10,20,30)

let colors = ['red','black','white','green','yellow','red'];
var unique_colors = [...new Set(colors)]; 


let Computer = {
    model: "Asus",
    RAM: "16GB",
    camera: "8GB"
}

const {model,RAM,camera} = Computer;

console.log(model)
console.log(RAM);


class Person {

}


class Student extends Person{

}


let Asus = {
    model: "Asus",
    brand: "Zenbook",
    price: 2000, 
}

let HP = {
    model: "HP",
    brand: "Pavilion",
    price: 1700, 
}


let CompInfo = {
    compName: function() {
        return this.model + " " + this.brand
    },
    compPrice: function() {
        return this.price / 1.7 + "$"
    },
    compMemory: function(HDD,SSD) {
        return "HDD: " + HDD + " || " + "SSD: " + SSD 
    }
}

console.log(CompInfo.compName.call(Asus));
console.log(CompInfo.compName.apply(HP));


console.log(CompInfo.compMemory.call(Asus,1000,128));
console.log(CompInfo.compMemory.apply(HP,[512,256]));


// CALL / APPLY / BIND


var obj = {
    number1: 5,
    number2: 10
}

function Hesabla(number3,number4) {
    return this.number1 + this.number2 + number3 + number4;
}

// console.log(Hesabla(15,20))

let Calculate = Hesabla.bind(obj);
console.log(Calculate(15,20))