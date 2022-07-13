import { Operation } from './Operation';

export default class CalculatorModel {
	firstNum = null;
	secondNum = null;
	result = null;
	operation = Operation.None;

	Calculate() {
		if (
			this.firstNum == null ||
			this.secondNum == null ||
			this.operation == Operation.None
		)
			return;

		this.firstNum = parseFloat(this.firstNum);
		this.secondNum = parseFloat(this.secondNum);
		switch (this.operation) {
			case Operation.Division:
				// dělení nulou
				if (this.secondNum == 0) {
					this.result = 'Divide by zero';
					return;
				}
				this.result = this.firstNum / this.secondNum;
				break;
			case Operation.Multiplication:
				this.result = this.firstNum * this.secondNum;
				break;
			case Operation.Subtraction:
				this.result = this.firstNum - this.secondNum;
				break;
			case Operation.Addition:
				this.result = this.firstNum + this.secondNum;
				break;
		}

		// pokud máme hodně čísel, zkrátíme je
		if (String(this.result).length > 9) {
			this.result = parseFloat(this.result).toPrecision(7);
		}

		// tečky výsledky změníme na čárky
		this.result = String(this.result).replace('.', ',');
		this.operation = Operation.None;
	}

	// pomocná metoda, která zjistí error. Při následném zadávání čísel odstraní řetězec a napíše číslo
	isError() {
		if (this.result == 'NaN' || this.result == 'Divide by zero') {
			this.result = '';
			return true;
		}
	}
}
