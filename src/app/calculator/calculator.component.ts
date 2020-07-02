import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

export class CalculatorComponent implements OnInit {

  currentValue = '0';
  firstValue = null;
  calculationType = null;
  waitForSecondValue = false;
  result = null;

  constructor() { }

  ngOnInit(): void {
  }

  public getValue(v: string) {
    
    console.log(this.waitForSecondValue);
    if (this.waitForSecondValue === true) {
      this.currentValue = v;
      this.waitForSecondValue = false;
    }
    else if (this.currentValue === '0') {
      this.currentValue = v;
    } else {
      this.currentValue += v;
    }
  }

  public doCalculation(calc, secondValue) {

    switch (calc) {
      case '+':
        return this.firstValue += secondValue;
      case '-':
        return this.firstValue -= secondValue;
      case '*':
        return this.firstValue *= secondValue;
      case '/':
        if (secondValue === 0) {
          return 'ERROR'
        }
        else {
          return this.firstValue /= secondValue;
        }
      case '%':
        if (secondValue === 0) {
          return 'ERROR'
        }
        else {
          return this.firstValue %= secondValue;
        }
      case '=':
        return secondValue;
    }

  }

  public getCalculationType(calc: string) {

    console.log(this.firstValue);
    if (this.firstValue === null) {
      this.firstValue = Number(this.currentValue);
    } else if (this.calculationType != null) {
      this.result = this.doCalculation(this.calculationType, Number(this.currentValue))
      this.currentValue = String(this.result);
      this.firstValue = this.result;
      console.log(this.result);
    }
    this.calculationType = calc;
    this.waitForSecondValue = true;
  }

  public clear() {
    this.currentValue = '0';
    this.firstValue = null;
    this.calculationType = null;
    this.result = null;
    this.waitForSecondValue = false;
  }
}