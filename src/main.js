import Vue from 'vue';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import VueRouter from 'vue-router';
import ChampionsList from './views/ChampionsList';
import Home from './views/Home';

Vue.use(VueRouter);

const routes = [
  {path: "/", components: Home},
  {path: "/Champions", components: ChampionsList},
];

const router = new VueRouter ({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
