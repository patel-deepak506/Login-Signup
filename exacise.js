// this is the file for google doc expcise basic


// question 1
// g = 10;
// var x = 5;
// var y = 7;
// function add(a , b){
//     var c ;
//     c = a+b ;
//     return c ;
// }
// var z  =  add(x , y)
// console.log( `z  = ${z}`);


// question 2

// var person = {
//     id: 1,
//     name: "deepak",

//     print: function () {
//         console.log(this.id, this.name);
//     }
// }
// console.log(person);
// console.log(person.__proto__);
// person.print();
// console.log("done");


// question 3

// 'use strict'
// gfn = function (){
//     console.log(`gfn ${this}`);
// }
// gfn();

// var vfn = function (){
//     //it will throuth error while we are asign some value in console
//   this.console = null;
// }
// vfn();

//  var lfn = function (){
//     console.log(`lfn ${this}`);
// }
// lfn();

// var person  = {
//     id:1,
//     name:"deepak",

//     print:function(){
//         console.log(`person ${this}`);
//     }
// }

// person.print();


// question 4

// 'use strict';

// function Person(id, name){
//     console.log(this);
//     this.id = id;
//     this.name = name;
// }

// var eich = new Person(1,"Deepak Patel")

// console.log(eich);

// Person(2, "Somesh Shakya");


// question 5

// 'use strict';
// function Employee(id, name){
//     console.log(this);
//     this.id = id;
//     this.name = name;
//     Employee.count = 10;
//     Employee.prototype.baseSalary = 100000;
// }

// var eich = new Employee(1,"Deepak Patel")

// console.log(eich.name); // son
// console.log(eich.baseSalary);//Father
// console.log(eich.toString()); // Grandfather
// console.log(eich.count); // Son does not go to mom , he would not find any  count values
// console.log(Employee.count); // Ask mom direclty , will find count values


//question 6 
// Arrow Function do Not have a Prototype 
// Arrow Function can't be used with 'new'
// Arrow Function will not  get their own 'this'
// Arrow Function will not  get their own 'arguments'


// function fun(){

//     console.log(arguments['1']);
//     console.log("hi fun function");
// }

// fun( 1 ,2)

// const deepak = ()=>console.log(arguments['0']);

// deepak(4,6)

// const sqr = (x) =>x*x;

// class EmployeeClass {
//     constructor(id , name){
//         this.patel =id;
//         this.name =name;
//     }
//     print(){
//         console.log(this.patel , this.name);
//         [1,2,3].map(v =>sqr(v))
//     }
// }

// var marc  = new EmployeeClass(3 , "Somesh ")
// marc.print();


// Question No 9
// 'use strict'
// function Person(id , name) {
//     this.id = id
//     this.name = name
//     this.secret = "Something secret"
  
//     Object.defineProperty(
//         this ,
//         'id',
//         {value:id , writable:false , configurable:false , enumerable:true}
//     );

//     this.name =name;

//     Object.defineProperty(
//         this ,
//         'secret',
//         {value:'something secret' , writable:false , configurable:false , enumerable:false}
//     );

// }


// Question no 11 closer function how its work

// var x  = 10 ; 
// function f1() {
//     x = 20
// }

// function f2() {
//     var y = 10
//     console.log(x);
// }

// function f3() {
//     var y = 10
// }

// f1();
// f2();
// f3();
// console.log("done");

// Question no 12 closer function how its work

// var hathi = 'gajraj'

// function city() {
//     var rat = 'chooha'
//     function zoo() {
//         console.log('this is inside zoo function');
//         var tiger = "Zinda hai";
//         var lion = 'mar gaya';

//         function cage() {
//             console.log('tiger =>', tiger );
//             console.log('lion =>' , lion);
//             console.log('rat =>',rat);
//             console.log('hathi =>' , hathi);
             
//         }
//         return cage ;  
//     }
//     return zoo;   
// }
// // you can directily access to using this process 
// // city()()();

// var chidaghar = city();
// var pingra  = chidaghar();
// pingra()
// console.log("done");


// Question No 12

// function longRun(ms){
//     const start = new Date ;
//     while (new Date -start < ms);
// }

// function frozen(){
//     console.log('start Frozen');
//     longRun(5000)
//     console.log('end Frozen');
// }
// // frozen()

// function netFrozen(){
//     console.log('start norFrozn');
//     setTimeout(longRun , 5000 , 5000);
//     console.log('end NotFrozen');
// }
// console.log('finally conplete last function');
// console.log('deepak');
// netFrozen()


// //Question No. 14 This is a function generator its work is it will run once only 
// // one time and stop function thats why we are using loop for it

// function* gen(){
//     // statement machine 
//     // swith(which time ++) case 1  and yield is invild function 
//     yield 1 ;
//     // case2
//     yield 2;
//     // case 3
//     yield 3;
//     // case4
//     yield 4;
//     // case 5
//     yield 5;  
// }
// for (const value of gen()){
//     console.log(value);
// }



// var num1 = '10' +1;
// var num2 = '10'-1;
// console.log(num1);
// console.log(num2);


class Node {
    constructor(value){
        this.right = null;
        this.value = value;
        this.left = null;
    }
}

class Tree {
    constructor(){
        this.root = null;
    }

    addNode(node , value){
        if(null ==node){
            return new Node(value)
        }

        if(value < node.value){
            node.right = this.add(node.right , value)
        }  else if(value>node.value){
            node.left = this.add(node.left , value)
        }
        return node ;
    }
    add(value){
        this.root = this.addNode(this.root , value)
    }

    print_tree(node){
        if(node){
            this.print(node.right)
            console.log(node.value);
            this.print(node.left)
        }
    }
    print(){
        this.print_tree(this.root)
    }
}
const ped = new Tree;
 ped.add(2);
 ped.add(5);
 ped.add(6);
 ped.add(1);
 ped.add(2);
 ped.add(10);

ped.print();

const s =  new Set([5,6 ,6,7,8])

console.log(s);