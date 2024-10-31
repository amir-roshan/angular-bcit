import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css',
})
export class CalculatorComponent {
  display = '';
  buttons = [
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['C', '0', '=', '+'],
  ];

  onPress(button: string) {
    if (button === 'C') {
      this.clearDisplay();
    } else if (button === '=') {
      this.calculateResult();
    } else {
      this.addToDisplay(button);
    }
  }

  addToDisplay(button: string) {
    this.display += button;
  }

  clearDisplay() {
    this.display = '';
  }

  calculateResult() {
    try {
      this.display = eval(this.display);
    } catch (e) {
      this.display = 'Error';
    }
  }
}
