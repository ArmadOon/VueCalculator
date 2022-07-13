<template>
	<div
		class="calculator-button"
		:class="{ 'calculator-button-operator': isOperator }"
		@click="onClick"
	>
		{{ displayValue }}
	</div>
</template>
<script>
export default {
	name: 'CalculatorButton',
	props: {
		displayValue: {
			type: String,
			required: true,
		},
	},
	computed: {
		isOperator() {
			return (
				this.displayValue !== ',' && isNaN(parseInt(this.displayValue))
			);
		},
	},
	methods: {
		onClick() {
			this.$emit('button-clicked', this.displayValue, this.isOperator);
		},
	},
};
</script>

<style scoped>
.calculator-button {
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75em;
	font-size: 1.5rem;
	font-weight: bold;
	flex: 0 0 auto;
	width: 60px;
	cursor: pointer;
	transition: all 0.3s ease-in-out;
}
.calculator-button:not(.calculator-button-operator) {
	background: transparent;
}
.calculator-button:not(.calculator-button-operator):hover {
	background: #f2edcf;
}
.calculator-button:active {
	transform: scale(0.85);
	box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.15);
}
.calculator-button-operator {
	background: #fee8d7;
}
.calculator-button-operator:hover {
	background: #fdddc3;
}
</style>
