import { createApp } from 'vue';
import App from './App.vue';
import CalculatorButton from '@/components/CalculatorButton.vue';

createApp(App).component('CalculatorButton', CalculatorButton).mount('#app');
