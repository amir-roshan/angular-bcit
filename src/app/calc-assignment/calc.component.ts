import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calc',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css'],
})
export class CalcComponent {
  public addNum1: string = '';
  public addNum2: string = '';
  public subNum1: string = '';
  public subNum2: string = '';
  public mulNum1: string = '';
  public mulNum2: string = '';
  public divNum1: string = '';
  public divNum2: string = '';

  public sumResult: string | null = null;
  public differenceResult: string | null = null;
  public productResult: string | null = null;
  public quotientResult: string | null = null;

  public results = [
    { operation: 'Addition', value: '' },
    { operation: 'Subtraction', value: '' },
    { operation: 'Multiplication', value: '' },
    { operation: 'Division', value: '' },
  ];

  public verifyNumber(value: string): boolean {
    return !isNaN(Number(value)) && value.trim() !== '';
  }

  public performCalculation(opType: string, num1: string, num2: string): void {
    if (!this.verifyNumber(num1) || !this.verifyNumber(num2)) {
      this.initializeCalculations();
      return;
    }

    const firstNum: number = Number(num1);
    const secondNum: number = Number(num2);

    switch (opType) {
      case 'Addition':
        this.computeAddition(firstNum, secondNum);
        break;
      case 'Subtraction':
        this.computeSubtraction(firstNum, secondNum);
        break;
      case 'Multiplication':
        this.computeMultiplication(firstNum, secondNum);
        break;
      case 'Division':
        this.computeDivision(firstNum, secondNum);
        break;
    }
  }

  private computeAddition(a: number, b: number): void {
    this.sumResult = this.formulateResultString(a, b, a + b, '+');
    this.refreshCalculationArray(0, this.sumResult);
  }

  private computeSubtraction(a: number, b: number): void {
    this.differenceResult = this.formulateResultString(a, b, a - b, '-');
    this.refreshCalculationArray(1, this.differenceResult);
  }

  private computeMultiplication(a: number, b: number): void {
    this.productResult = this.formulateResultString(a, b, a * b, '*');
    this.refreshCalculationArray(2, this.productResult);
  }

  private computeDivision(a: number, b: number): void {
    if (a === 0 || b === 0) {
      this.clearResults();
      return;
    }
    this.quotientResult = this.formulateResultString(a, b, a / b, '÷');
    this.refreshCalculationArray(3, this.quotientResult);
  }

  private formulateResultString(
    first: number,
    second: number,
    outcome: number,
    symbol: string
  ): string {
    if (first % 1 !== 0 || second % 1 !== 0) {
      return `${first.toFixed(2)} ${symbol} ${second.toFixed(
        2
      )} = ${outcome.toFixed(2)}`;
    } else if (first % second === 0 && symbol === '÷') {
      return `${first.toFixed(2)} ${symbol} ${second.toFixed(
        2
      )} = ${outcome.toFixed(2)}`;
    }
    return `${first} ${symbol} ${second} = ${outcome}`;
  }

  private refreshCalculationArray(index: number, result: string): void {
    this.clearResults();
    this.addNum1 = '';
    this.addNum1 = '';
    this.addNum2 = '';
    this.subNum1 = '';
    this.subNum2 = '';
    this.mulNum1 = '';
    this.mulNum2 = '';
    this.divNum1 = '';
    this.divNum2 = '';
    this.results[index].value = result;
  }

  public clearResults(): void {
    this.results.forEach((calc) => (calc.value = ''));
  }

  public initializeCalculations(): void {
    this.sumResult = '';
    this.differenceResult = '';
    this.productResult = '';
    this.quotientResult = '';
  }

  public clearInputs(): void {
    this.addNum1 = '';
    this.addNum2 = '';
    this.subNum1 = '';
    this.subNum2 = '';
    this.mulNum1 = '';
    this.mulNum2 = '';
    this.divNum1 = '';
    this.divNum2 = '';
    this.initializeCalculations();
  }
}
