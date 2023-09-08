// @ts-ignore
import { createI18n } from "vue-i18n";
import { appLanguageConfig } from "@/i18n/appLanguageConfigClass";

// Получаем уже готовую конструкцию для одного языка.
const messages = appLanguageConfig.initializeDefaultMessage();

// Вытаскиваем "локаль" из только что полученной конструкции (единственный ключ)
const locale = Object.keys(messages)[0];

/*
 * Создаём и настраиваем i18n для мультиязычности
 */
export const i18n = createI18n({
  // Будем использовать Composition API
  legacy: false,
  // Язык по умолчанию
  locale: locale,
  /* По умолчанию буду использовать английский язык,
   * если передали ненастроенный язык.
   */
  fallbackLocale: appLanguageConfig.FALLBACK_LOCALE,
  /* Автодобавление глобальной переменной $t
   * во все файлы.
   */
  globalInjection: true,
  // Набор переводов
  messages: messages
});
