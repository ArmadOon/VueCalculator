<template>
	<div class="calculator-row">
		<calculator-button
			v-for="button of buttons"
			:key="button"
			:display-value="button"
		/>
	</div>
</template>
<script>
export default {
	name: 'CalculatorRow',
	props: {
		buttons: {
			required: true,
			validator: (v) =>
				Array.isArray(v) && v.length === 4 && new Set(v).size === 4,
		},
	},
};
</script>
