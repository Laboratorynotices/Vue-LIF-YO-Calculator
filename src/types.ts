import type { RouteRecordRaw } from "vue-router";

/**
 * Структура данных отдельного пунка (основной) навигации.
 * Позже будет перенесён в отдельный файл для типов (структур).
 */
export interface RouterLink {
  // Отображаемое название в навигации
  nameMenu: string;
  // Относительный путь
  path: string;
  // Отображать ли пункт в навигации
  showInMenu: boolean;
}

/**
 * Тип объединяет в себе отдельный маршрут и соответствующего пункта меню
 */
export type MenuAndRouteElement = RouteRecordRaw & RouterLink;


/***************************/
/********* Рецепты *********/
/***************************/

/**
 * Структура данных отдельного ингридиента для рецепта 
 */
export interface Material {
  // Название ингридиента
  "name": string,
  // Требуемое количество
  "quantity": number,
  // Вес ингридиента при подсчёте качества
  "weight": number
}
