import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import firebase from "firebase";

import Dashboard from "../pages/dashboard/Dashboard.vue";
import Login from "../pages/login/Login.vue";
import Register from "../pages/register/Register.vue";

import Quatro from "../pages/games/quatro/Quatro.vue";

const mainRoutes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresGuest: true,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
    meta: {
      requiresGuest: true,
    },
  },
];

const mainGameRoutes: Array<RouteRecordRaw> = [
  {
    path: "/quatro/loby",
    name: "QuatroLoby",
    component: Quatro,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/quatro/game",
    name: "QuatroGame",
    component: Quatro,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/quatro/game-over",
    name: "QuatroGameOver",
    component: Quatro,
    meta: {
      requiresAuth: true,
    },
  },
];

// ---
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [...mainRoutes, ...mainGameRoutes],
});

// --- Redirect mechanism
router.beforeEach((to, from, next) => {
  // --- Check flag 'requiresAuth'
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Check if NOT logged in
    if (!firebase.auth().currentUser) {
      next({
        path: "/login",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
    // --- Check flag 'requiresGuest'
  } else if (to.matched.some((record) => record.meta.requiresGuest)) {
    // Check if IS logged in
    if (firebase.auth().currentUser) {
      next({
        path: "/",
        query: {
          redirect: to.fullPath,
        },
      });
    } else {
      next();
    }
    // ---
  } else {
    next();
  }
});

export default router;
