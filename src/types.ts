import type { RouteRecordRaw } from "vue-router";

/**
 * Структура данных отдельного пунка (основной) навигации.
 * Позже будет перенесён в отдельный файл для типов (структур).
 */
export interface RouterLink {
  // Отображаемое название в навигации
  nameMenu: string;
  // Имя маршрута
  name: string;
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
 * Структура данных отдельного ингридиента (материала) для рецепта 
 */
export interface Material {
  // Название ингридиента
  "name": string,
  // Требуемое количество
  "quantity": number,
  // Вес ингридиента при подсчёте качества
  "weight": number
}

/**
 * Структура данных отдельного рецепта 
 */
export interface Recipe {
  // Название продукции
  "name": string,
  // Ссылка на картинку предмета к этому рецепту 
  "src": string,
  // Список материалов
  "materials": Material[],
  // Вес влияния инструмента
  "toolWeight"?: number,
  // Вес влияния верстака
  "workbenchWeight"?: number
}

/**
 * Структура данных отдельного навыка 
 */
export interface Skill {
  // Название навыка
  "name": string,
  // Действует ли на этот навык бонус от профессиональной одежды
  "professionalClothing": boolean,
  // Ссылка на картинку к этому навыку
  "src": string,
  // Список рецептов
  "recipes": Recipe[]
}
