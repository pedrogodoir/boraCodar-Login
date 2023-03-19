import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SingUp from '../views/SignUp.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SingUp },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;