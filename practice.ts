import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'practice',
  templateUrl: './practice.html',
  styleUrls: ['./new-component.component.css']
})
export class practice {
       name:string = "";
       city:string = "";
       address: address;
       hobbies: string[];
       showHobbies: boolean;

       constructor(){
           this.name = "John Doe";
           this.address = {
          city : "Chicago",
          street : "12 Main St"
       }
           this.hobbies = ['movies', 'cricket', 'job'];
           this.showHobbies = false;
    }
    toggleHobbies(){
         
        if (this.showHobbies == true){
            this.showHobbies = false;     
            }else{
            this.showHobbies = true;
         }
    }
   addHobby(hobby){
         this.hobbies.push(hobby);
   }
   deleteHobby(i){
    this.hobbies.splice(i, 1);
   }
}

interface address{
    city : string;
    street : string;
       
}

