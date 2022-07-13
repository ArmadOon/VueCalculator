<template>
	<div class="container">
		<div class="calculator">
			<div class="calculator-row">
				<div class="display"></div>
				<calculator-button display-value="C" />
			</div>
			<calculator-row
				v-for="(row, index) of rows"
				:key="'row' + (index + 1)"
				:buttons="row"
			/>
		</div>
	</div>
</template>

<script>
import CalculatorRow from '@/components/CalculatorRow.vue';
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
		};
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
