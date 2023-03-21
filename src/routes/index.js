import { createRouter, createWebHistory } from "vue-router"

import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'

const routes = [
  { path: '/boraCodar-Login/', component: Home },
  { path: '/boraCodar-Login/login', component: Login },
  { path: '/boraCodar-Login/signup', component: SignUp },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;