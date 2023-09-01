<script setup lang="ts">
import { ref, type Ref } from "vue";
import CodeBlock from "./CodeBlock.vue";
import AboutImages from "./AboutImages.vue";

/**
 * В этой переменной будут храниться какие панели открыты.
 * А так же мы можем управлять какая должна быть открыта при старте.
 */
const panel: Ref<string[]> = ref(["last"]);
</script>

<template>
  <v-expansion-panels
    v-model="panel"
    multiple
  >
    <v-expansion-panel value="last">
      <v-expansion-panel-title>
        <h1>Формат рецептов</h1>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <p>
          Чтобы этот калькулятор быстрее заработал, мне нужна ваша помощь,
          чтобы вы высылали мне рецепты производства.
        </p>

        <p>
          Но описание этих рецептов должно следовать правилам.
          Все <b>названия в описании рецепта должны быть на английском языке</b>,
          а следовательно запускаем игру на английском или пользуемся
          <a href="https://lifeisfeudal.fandom.com/de/wiki/Life_is_Feudal-Wiki" target="_blank"
          >https://lifeisfeudal.fandom.com/de/wiki/Life_is_Feudal-Wiki</a>
          для перевода, но учтите, что на сайте фандомпедии могут быть ошибки
          (не указаны веса для ингредиентов, либо даёт рецепт для MMO).
          А так же "блокнот", где мы будем описывать рецепт.
        </p>

        <h2>Первый пример</h2>

        <p>
          Находим рецепт, который ещё не описан, или в котором сделана ошибка,
          во втором случае указывайте это в сообщении.
        </p>

        <p>
          Опишем рецепт <a href="https://lifeisfeudal.fandom.com/wiki/Mortar_and_pestle" target="_blank"
          >ступки и пестика</a>.        
        </p>

        <p>
          В блокноте записываем категорию навыков, к которому принадлежит этот рецепт,
          и внешние фигурные скобки. А в этих фигурных скобках в атрибуте <b>"name"</b>
          английское название предмета:
        </p>

        <code-block>
          <pre
>Ремёсла
{
  "name": "Mortar and pestle"
}</pre
          >
        </code-block>

        <p>
          Дальше добавим в описание рецепта второй атрибут "materials" с
          квадратными скобками, внутри которых мы будем перечислять ингредиенты.
        </p>

        <code-block>
          <pre
>Ремёсла
{
  "name": "Mortar and pestle",
  "materials": [
  ]
}</pre
          >
        </code-block>

        <p>
          <b>Ступка и пестик</b> делаются из двух ингредиентов
          <a href="https://lifeisfeudal.fandom.com/wiki/Rock" target="_blank">камня</a>
          и
          <a href="https://lifeisfeudal.fandom.com/wiki/Branch" target="_blank">ветки</a>.
          Добавим их по очереди.
        </p>

        <p>
          Начнём с <b>камня</b>. Нужна 1 штука (<i>quantity</i>)
          с влиянием на качество 30% (<i>weight</i>).
          Записываем эти данные внутри новых фигурных скобок:
        </p>

        <code-block>
          <pre
>Ремёсла
{
  "name": "Mortar and pestle",
  "materials": [
    {
      "name": "Rock",
      "quantity": 1,
      "weight": 30
    }
  ]
}</pre
          >
        </code-block>

        <p>
          Добавим и <b>ветку</b>. Нужна 1 штука (<i>quantity</i>)
          с таким же влиянием на качество 30% (<i>weight</i>):
        </p>

        <code-block>
          <pre
>
Ремёсла
{
  "name": "Mortar and pestle",
  "materials": [
    {
      "name": "Rock",
      "quantity": 1,
      "weight": 30
    },
    {
      "name": "Branch",
      "quantity": 1,
      "weight": 30
    }
  ]
}</pre
          >
        </code-block>

        <p>
          На последок добавим два дополнительных атрибута.
          <i>src</i> со ссылкой на картинку на фандомпедии,
          а так же <i>minLevel</i> с уровнем навыка,
          когда этот рецепт в игре открывается.
        </p>

<code-block>
  <pre
>
Ремёсла
{
  "name": "Mortar and pestle",
  "src": "https://static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/9/9f/Mortar_and_pestle.png",
  "minLevel": 0,
  "materials": [
    {
      "name": "Rock",
      "quantity": 1,
      "weight": 30
    },
    {
      "name": "Branch",
      "quantity": 1,
      "weight": 30
    }
  ]
}</pre
          >
        </code-block>

        <h2>Второй пример</h2>

        <p>
          В качестве второго примера рассмотрим рецепт
          <a href="https://lifeisfeudal.fandom.com/wiki/Cheese" target="_blank">Сыра</a>,
          для приготовления которого помимо одного <b>молока</b> с весом 60% в виде ингредиента
          нужны <b>инструмент</b> и <b>"верстак"</b>.
        </p>

        <p>
          Для обозначения влияния на качество инструмента используем атрибут <i>toolWeight</i> (тут 10%),
          а для обозначения влияния "верстака" добавим другой атрибут <i>workbenchWeight</i> (тоже 10%).
        </p>

        <p>
          И получается:
        </p>

        <code-block>
          <pre
>
Кулинария
{
  "name": "Cheese",
  "src": "static.wikia.nocookie.net/lifeisfeudal_gamepedia/images/a/a5/Cheese.png",
  "minLevel": 0,
  "materials": [
    {
      "name": "Milk",
      "quantity": 1,
      "weight": 60
    }
  ],
  "toolWeight": 10,
  "workbenchWeight": 10
}</pre
          >
        </code-block>
      </v-expansion-panel-text>
    </v-expansion-panel>
    <about-images></about-images>
  </v-expansion-panels>
</template>

<style scoped>
p {
  margin-bottom: 1em;
}
</style>
