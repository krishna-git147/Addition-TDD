
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  sum(num:string){
    var input=[];
    num=num.replace(/(\n)/gm,",");
     input=num.split(",");
    if(num===""){
      return 0;
    } if(num.length==1){
      return Number(num);
    }
    else {
      return this.addedSum(input);
    }
  }
  addedSum(numbers:string[]){
    this.negativeSum(numbers);
    var sum=0,i;
    for(i=0;i<numbers.length;i++){
      sum+=Number(numbers[i]);
    } return sum;
 
   }
   negativeSum(numbers:string[]){
   for(var i=0;i<numbers.length;i++){
    if(Number(numbers[i])<0){
      console.log("value sis "+Number(numbers[i]));
      throw Error("negatives not allowed");
    }
    }
  }
  constructor() { }

  ngOnInit(): void {
    
  }
  
}
