<template>
	<div class="container">
		<div class="calculator">
			<div class="calculator-row">
				<div class="display">{{ this.value }}</div>
				<calculator-button
					display-value="C"
					@button-clicked="onButtonClicked"
				/>
			</div>
			<calculator-row
				v-for="(row, index) of rows"
				:key="'row' + (index + 1)"
				:buttons="row"
				@button-clicked="onButtonClicked"
			/>
		</div>
	</div>
</template>

<script>
import CalculatorRow from '@/components/CalculatorRow.vue';
import CalculatorModel from '@/components/CalculatorModel';
export default {
	name: 'TheLayout',
	data() {
		return {
			value: '0',
			rows: [
				['7', '8', '9', '/'],
				['4', '5', '6', 'X'],
				['1', '2', '3', '-'],
				['0', ',', '=', '+'],
			],

			calculator: new CalculatorModel(),
		};
	},
	methods: {
		setOperation(operation) {
			// změníme čárky na tečky, protože funkce float pracuje s tečkami
			this.calculator.firstNum = String(this.value).replace(',', '.');
			// nastavíme operaci
			this.calculator.operation = operation;
			this.value = '0';
		},
		onButtonClicked(value, isOperation) {
			if (isOperation) {
				switch (value) {
					case '=':
						// změníme čárky na tečky, protože funkce float pracuje s tečkami
						this.calculator.secondNum = String(this.value).replace(
							',',
							'.'
						);
						// vypočítáme příklad
						this.calculator.Calculate();
						// výsledek z kalkulačky předáme komponentě
						this.value = this.calculator.result;
						return;
					// odstraníme číslo
					case 'C':
						this.value = '0';
						return;
					// nastavíme příslušnou operaci
					case '+':
					case '/':
					case 'X':
					case '-':
						this.setOperation(value);
						return;
				}
			}

			// Když už je jedna desetinná čárka napsaná, tak se další nenapíše.
			if (this.value.includes(',') && value == ',') return;

			// Když je napsaná jen nula, tak se vymaže, aby se napsal stisknutý znak. Když je stisknuta desetinná čárka, tak se nula nevymaže.
			if (
				(this.value == '0' && value != ',') ||
				this.calculator.isError()
			)
				this.value = '';

			// číslo dáme do řetězce pro výsledek
			this.value += value;
		},
	},
	components: { CalculatorRow },
};
</script>

<style>
.container {
	background: #efefef;
	height: 100vh;
	width: 100vw;
	display: flex;
	justify-content: center;
	align-items: center;
}
.calculator {
	background: #f6f3df;
	border: 1px solid #bcbcbc;
	border-radius: 4px;
	overflow: hidden;
}
.calculator-row {
	display: flex;
	justify-content: space-between;
	height: 60px;
	width: 240px;
}
.calculator-row:first-child {
	border-bottom: 1px solid #cdcdcd;
}
.display {
	flex: 1;
	font-size: 1.5rem;
	padding: 0.5em;
	display: flex;
	align-items: center;
	background: #def7eb;
	justify-content: flex-end;
}
</style>
