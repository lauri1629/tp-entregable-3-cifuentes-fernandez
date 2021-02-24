import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

/* importar 
import VueRouter from 'vue-router';
import Reminders from './views/Reminders';
import Home from './views/Home';
import AddContact from './views/AddContact';
import Login from './views/Login';
 */

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
