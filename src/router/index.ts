import { routes } from '@/menu-elements'
import {
  createRouter,
  createWebHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized
} from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
});

/**
 * При помощи JS обновляем мета-заголовок страницы.
 */
router.beforeEach(
  (
    to: RouteLocationNormalized,
    from: RouteLocationNormalized,
    next: NavigationGuardNext
  ): void => {
    document.title =
      (to.meta.title ? to.meta.title + " -- " : "") + "Калькулятор качества производства LIF YO.";
    next();
  }
);

export default router
