import Vue from 'vue';
import App from './App.vue';
import '@/assets/css/tailwind.css';
import Task from './components/Task';
import Button from './components/Button';

import Card from './components/Card.vue';

Vue.config.productionTip = false;

Vue.component('todo-card', Card);
Vue.component('todo-button', Button);
Vue.component('todo-task', Task);
new Vue({
  render: h => h(App),
}).$mount('#app');
