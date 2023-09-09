import { languageSwitcher } from '@/i18n/languageSwitcherClass';
import { routes } from '@/menu-elements'
import {
  createRouter,
  createWebHashHistory,
  type NavigationGuardNext,
  type RouteLocationNormalized,
  RouterView
} from 'vue-router';
import { i18n } from "@/i18n";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/:locale?",
      component: RouterView,
      beforeEnter: languageSwitcher.routeMiddleware,
      children: routes
    }
  ]
});

/**
 * При помощи JS обновляем мета-заголовок страницы.
 */
router.beforeEach(
  (
    to: RouteLocationNormalized,
    _from: RouteLocationNormalized,
    next: NavigationGuardNext
  ): void => {
    // Меняем мета-заголовок страницы
    document.title =
      (to.meta.title ?
        i18n.global.t("navigation."+to.meta.title) + " -- " : "") +
        i18n.global.t("navigation.LIF-YO-production-quality-calculator");
    // Переходим к следующему правилу
    next();
  }
);

export default router
