import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// Настройка мультиязычности
import { i18n } from '@/i18n/index';

const app = createApp(App);

app.use(i18n);

app.use(router);

app.mount('#app');
