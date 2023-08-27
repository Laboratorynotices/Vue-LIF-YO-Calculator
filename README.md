# Калькулятор качества продуктов при производстве в LIF YO
Под кулисами калькулятора качества при производстве к игре LIF YO продолжаю разбираться с [Vue 3](https://vuejs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org) и прочее. Может быть даже подключусь к [Firebase](https://firebase.google.com/) и сделаю авторизацию при помощи её.

[Основная страница проекта](https://laboratorynotices.wordpress.com/2023/08/24/vue-3-%d0%ba%d0%b0%d0%bb%d1%8c%d0%ba%d1%83%d0%bb%d1%8f%d1%82%d0%be%d1%80-%d0%ba%d0%b0%d1%87%d0%b5%d1%81%d1%82%d0%b2%d0%b0-%d0%bf%d1%80%d0%be%d0%b8%d0%b7%d0%b2%d0%be%d0%b4%d1%81%d1%82%d0%b2%d0%b0/).

[Демонстрация проекта](https://laboratorynotices.github.io/Vue-LIF-YO-Calculator/).

Так же постараюсь придерживаться [соглашению о коммитах](https://www.conventionalcommits.org), по крайней мере, как я это буду понимать.

## Краткий список команд

запуск виртуального сервера для разработки:
```sh
npm run dev
```

сборка версии для продукции:
```sh
npm run build
```

запуск уже собранной (build) версии:
```sh
npm run preview
```

Но, чтобы открыть доступ к виртуальному серверу по сети надо добавить суффикс «-- --host». Т.е. для разработки и теста по сети буду использовать:

```sh
npm run dev -- --host
```

Обработка Lint
```sh
npm run lint
```
