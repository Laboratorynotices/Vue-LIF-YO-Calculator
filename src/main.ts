import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// @ts-ignore
import { createI18n } from "vue-i18n";

/**
 * Набор переводов.
 * Позже разобью по отдельным файлам.
 */
const messages = {
  en: {
    "hello": "hello world"
  },
  ru: {
    "hello": "Привет"
  }
};

/*
 * Создаю и настраиваю i18n для мультиязычности
 */
const i18n = createI18n({
  // Будем использовать Composition API
  legacy: false,
  // Язык по умолчанию
  locale: "ru",
  /* По умолчанию буду использовать английский язык,
   * если передали ненастроенный язык.
   */
  fallbackLocale: "en",
  /* Автодобавление глобальной переменной $t
   * во все файлы.
   */
  globalInjection: true,
  // Набор переводов
  messages
});

const app = createApp(App);

app.use(i18n);

app.use(router);

app.mount('#app');
