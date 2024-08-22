import Vue from 'vue';
import Router from 'vue-router';
import Register from '../components/UserRegister.vue';
import Login from '../components/UserLogin.vue';
import AdminPanel from '../components/AdminPanel.vue';
import { auth } from '../firebaseConfig';

Vue.use(Router); // Убедитесь, что VueRouter используется правильно

const router = new Router({
  routes: [
    { path: '/register', component: Register },
    { path: '/login', component: Login },
    { path: '/admin', component: AdminPanel, meta: { requiresAuth: true } }
  ]
});

router.beforeEach((to, from, next) => {
  const user = auth.currentUser;
  if (to.matched.some(record => record.meta.requiresAuth) && !user) {
    next('/login');
  } else {
    next();
  }
});

export default router;
