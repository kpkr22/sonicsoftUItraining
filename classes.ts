
interface userInterface{
    name:string;
    email:string;
    age:number;
    register();
    payInvoice();
}
class user implements userInterface{
    name: string; // we can use private,public and protected infront of name,email,age 
    email: string;
    age: number;

    constructor(name:string, email:string, age:number){
        this.name = name;
        this.email = email;
        this.age = age;

        console.log('user created :'+this.name);
    }

    // method
    // we can also make these private too
    register(){
          console.log(this.name+" "+'is now registered');
    }
    payInvoice(){
        console.log(this.name+" "+ ' paid invoice');
    }
}

let john = new user('john','kiran@gmail.com',23);
console.log(john.age);
john.register();

//Inheritance

class member extends user{
    id: number;

    constructor(id:number,name:string, email:string, age:number){
        super(name, email, age);
        this.id = id;
    }
    payInvoice(){
        super.payInvoice();
    }
}

let mike:user = new member(1,'mike','mike@gmail.com',33);
mike.payInvoice();


