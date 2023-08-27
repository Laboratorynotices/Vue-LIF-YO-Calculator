// @ts-ignore
import { createI18n } from "vue-i18n";
// Набор переводов
import en from "./locales/en.json";
import ru from "./locales/ru.json";

/**
 * Собираем переводы из отдельных файлов.
 */
const messages = {
  en: en,
  ru: ru
};

/*
 * Создаём и настраиваем i18n для мультиязычности
 */
export const i18n = createI18n({
  // Будем использовать Composition API
  legacy: false,
  // Язык по умолчанию
  locale: import.meta.env.VITE_I18N_DEFAULT_LOCALE,
  /* По умолчанию буду использовать английский язык,
   * если передали ненастроенный язык.
   */
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE,
  /* Автодобавление глобальной переменной $t
   * во все файлы.
   */
  globalInjection: true,
  // Набор переводов
  messages
});
