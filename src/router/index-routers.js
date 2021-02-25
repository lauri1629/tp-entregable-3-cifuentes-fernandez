import Vue from 'vue'
import VueRouter from "vue-router";

import Home from '../views/Home.vue'
import ChampionsList from '../views/ChampionsList.vue'

Vue.use(VueRouter);

const routes = [
    {path: "/", components: Home},
    {path: "/Champions", components: ChampionsList},
];

const router = new VueRouter({
    routes
});
