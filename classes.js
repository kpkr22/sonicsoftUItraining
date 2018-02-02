/ Constructor function
function Person(fname,lname,age){
    this.fname=fname;
    this.lname=lname;
    this.age=age;
    this.walking=false;
}


Person.prototype.walk=function(){
    if(this.walking != true){
        console.log(this.fname+ " Started to walk");
        this.walking=true;
    }else{
        console.log(this.fname+ " is slready to walk");
    }
}

Person.prototype.stopWalk=function(){
    if(this.walking == true){
        console.log(this.fname+ " stopped walking");
        this.walking=false;
    }else{
        console.log(this.fname+ " is not  walkking");
    }
}


var ravi = new Person("Ravi","Katakam",20);  // Instances
var ragu = new Person("Ragu","Prasad",25);
//console.log(ravi,ragu);
//console.log(ravi.fname);

ravi.walk();
ravi.walk();
ravi.stopWalk();

console.log(ravi,ragu)



function Product(productName,price){
    this.productName = productName;
    this.price = price;
}


var shampoo = new Product("Xyz",20);
//console.log(shampoo);


// Encapsulation : Binding up of data and functions into one single unit or represent an entity is called encapsulation.

//prototying helps in auto linking a function to each and every instance of the prototyped constructor function.
// With this we can avoid memory leaks and imporove performance.


// Inheritence : Ability to reuse, rather than build from scratch. (Never reinvent the wheel.)

function Employee(fname,lname,age,empID,dept,salary){
    Person.call(this,fname,lname,age);
    this.empID=empID;
    this.dept=dept;
    this.salary=salary;
}

for(var fn in Person.prototype){
    Employee.prototype[fn]=Person.prototype[fn]
}

Employee.prototype.walk=function(){  // Function overriding
    if(this.walking != true){
        console.log("Employee "+ this.fname+ " Started to walk");
        this.walking=true;
    }else{
        console.log("Employee "+ this.fname+ " is slready to walk");
    }
}

var das = new Employee("das","debasis", 25, 1001, "IT",20000);
console.log(das);

das.walk();
das.stopWalk();


/**
 * Polymorphism : is a greek word. Poly means many , Morphism means ability to take more than one form
    Polymorphism can be implemented using 
    1) Function overriding
    2) Function overloading
 */


 /***
  * Demonstraion for function overloading
  */

  function add(){   // This type of functions are called variadic functions.
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        sum+=arguments[i]
    }
    return sum;
  }

console.log(add(10,20));
console.log(add(10,20,30));
console.log(add(10,20,30,40));
console.log(add(10,20,30,40,50));

var numbers = [1,2,3,4,5,6,7,8,9,10];

console.log(" Sum of all the values inside the array = "+  add.apply(null,numbers));
