import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      requiresAuth: true,
      esPublica: false
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    meta: {
      requiresAuth: true,
      esPublica: false
    }
  },
  {
    path: '/consultar-todos',
    name: 'consultarTodos',
    component: () => import(/* webpackChunkName: "consultarTodos" */ '../views/ConsultarTodosView.vue')
  },
  {
    path: '/consultar-id',
    name: 'consultarID',
    component: () => import(/* webpackChunkName: "consultarID" */ '../views/ConsultarIDView.vue'),
    meta: {
      requiresAuth: true,
      esPublica: false
    }
  },
  {
    path: '/guardar',
    name: 'guardar',
    component: () => import(/* webpackChunkName: "guardar" */ '../views/GuardarView.vue'),
    meta: {
      requiresAuth: true,
      esPublica: false
    }
  },
  {
    path: '/actualizar',
    name: 'actualizar',
    component: () => import(/* webpackChunkName: "actualizar" */ '../views/ActualizarView.vue'),
    meta: {
      requiresAuth: true,
      esPublica: false
    }
  },
  {
    path: '/actualizar-parcial',
    name: 'actualizarParcial',
    component: () => import(/* webpackChunkName: "actualizarParcial" */ '../views/ActualizarParcialView.vue'),
    meta: {
      requiresAuth: true,
      esPublica: false
    }
  },
  {
    path: '/eliminar',
    name: 'eliminar',
    component: () => import(/* webpackChunkName: "eliminar" */ '../views/EliminarView.vue'),
    meta: {
      requiresAuth: true,
      esPublica: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

/*Configuracion del guardian*/
router.beforeEach((to, from, next) => {
  const publicPages = ['/login'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = sessionStorage.getItem('token');

  if (authRequired && !loggedIn) {
    console.log("Ruta protegida, requiere autenticacion - redirigiendo al login");
    next('/login');
  } else {
    console.log("Acceso permitido");
    next();
  }
});

export default router
