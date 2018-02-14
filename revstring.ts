import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'revstring',
  templateUrl: './revstring.html',
  styleUrls: ['./new-component.component.css']
})
export class revstring {
  str: string = "";
  displayString: string = "";

  strReverse() {
    this.displayString = this.str.split("").reverse().join("");
    this.displayFunction();
  }
  displayFunction(){
    console.log(this.displayString)
  }
}


