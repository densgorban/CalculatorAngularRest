import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http";
import {error} from "util";

/**
 * @title Card with multiple sections
 */
@Component({
  selector: 'calculator',
  templateUrl: './app.calculator.html',
  styleUrls: ['./app.calculator.css'],
})
export class AppCalculator {
  constructor(private _http:HttpClient){}
  title = "Calculator";
  value = "0";
  op;

  update(number){
    if(this.value == "0") this.value = number;
    else this.value += number;
  }

  operation(type: Operation){
    if(Operation[type] === Operation.EQ) {
      var numbers = this.value.split(Operation[this.op]);
      console.log(numbers);
      this.getResult(+numbers[0], +numbers[1], this.op)
    } else if(this.op == null ){
      this.value += Operation[type];
      this.op = type;
    } else console.log("Woops, you type Operation twice")
  }

  clear(){
    this.value = "0";
    this.op = null
  }

  getResult(x:number,y:number,operation:Operation){
    this._http.get(`http://localhost:8080/calculator/?x=${x}&y=${y}&opr=${operation}`
      // ,{headers: new HttpHeaders( {'Access-Control-Allow-Origin' :'http://localhost'})}
      )
      .subscribe(
        (data) => {
          console.log(data);
          this.value = data.toString();
        }
        ,err => {
          console.log(err);
          this.value = "error"
        }
      )
  }
}

enum Operation {
  SUM = "+",
  SUB = "-",
  MULT = "*",
  DIV = "/",
  EQ = "="
}
