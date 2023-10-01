# Калькулятор качества продуктов при производстве в LIF YO
Под кулисами калькулятора качества при производстве к игре LIF YO продолжаю разбираться с [Vue 3](https://vuejs.org/), [Vite](https://vitejs.dev/), [TypeScript](https://www.typescriptlang.org) и прочее. Может быть даже подключусь к [Firebase](https://firebase.google.com/) и сделаю авторизацию при помощи её.

[Основная страница проекта](https://laboratorynotices.wordpress.com/2023/08/24/vue-3-%d0%ba%d0%b0%d0%bb%d1%8c%d0%ba%d1%83%d0%bb%d1%8f%d1%82%d0%be%d1%80-%d0%ba%d0%b0%d1%87%d0%b5%d1%81%d1%82%d0%b2%d0%b0-%d0%bf%d1%80%d0%be%d0%b8%d0%b7%d0%b2%d0%be%d0%b4%d1%81%d1%82%d0%b2%d0%b0/).

[Демонстрация проекта](https://laboratorynotices.github.io/Vue-LIF-YO-Calculator/).

Так же постараюсь придерживаться [соглашению о коммитах](https://www.conventionalcommits.org), по крайней мере, как я это буду понимать.

## Баромсаг

Для определения на какое качество поднимет баромсаг кучку материала буду использовать формулу:

$$ Q_Mr = \lfloor Q_Ms + ( Q_B * ((100 - Q_Ms)/100) / (S/10) \rfloor $$

Где $$Q_Mr$$ - конечное качество материала, $$Q_Ms$$ - начальное качество материала, $$Q_B$$ - качество баромсага, $$S$$ - размер кучки материала.

Формула взята с сайта https://lifeisfeudal.fandom.com/wiki/Baromsag#Effectiveness.

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

## Формула подсчёта качества продукции

Вначале подсчитаем базовое качество продукции:

$$Q_b =
\sum_i \lfloor W_i \* Q_i \rfloor +
\lfloor W_s \* S \rfloor +
\lfloor W_t \* Q_t \rfloor $$

где $$W_i$$ - вес влияния i-того ингридиента, $$Q_i$$ - качество i-того ингридиента, $$W_s$$ - вес влияния навыка, $$S$$ - на сколько прокачан навык, $$W_t$$ - вес влияния инструмента, $$Q_t$$ - уровень инструмента.

Далее идёт система бонусов и штрафа к этой базовой величине.
Если товар производится в производственных зданиях, то качество получается на 20% лучше.
Если на персонаже одета профессиональная одежда, подходящяя к этому навыку, то продукция становится лучше в пятую часть качества этой одежды.
Но при использовании не подходящего  (примитивного) инструмента продукция получается лишь в половину возможного качества.

Существует ещё два условия:
Максимальное качество продукции - 100.
Продукция не может быть качества выше, чем уровень навыка.
