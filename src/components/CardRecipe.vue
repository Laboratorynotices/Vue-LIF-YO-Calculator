<script setup lang="ts">
import type { Recipe } from "@/types";
import ShowMaterialInfo from "./ShowMaterialInfo.vue"
import { computed, ref, type Ref } from "vue";

// Данные, теперь получаем от "родительского" элемента
const props = defineProps({
  // Рецепт
  recipe: {
    // Хитрый приём, чтобы определить тип (а не интерфейс) переменной
    type: Object as () => Recipe
  },
  // Уровень навыка
  skillLevel: Number,
  // Уровень профессиональной одежды
  clothingLevel: Number
});

/*****************************/
/******** Вес навыка  ********/
/*****************************/

/**
 * Хранилище для весов компонентов
 */
const weightedSummands: Ref<number[]> = ref([]);

/**
 * Обновляет один из весов компонентов
 * @param weight новое значение веса
 * @param index индекс в списке весов
 */
const updateWeight = (weight: number, index: number): void => {
  weightedSummands.value[index] = weight;
};

/**
 * Вес самого навыка.
 * Высчитывается, как остаток после остальных весов.
 */
const skillweight = computed((): number => {
  // Результат будет остаток от 100 после вычитания остальных весов
  let skillweight = 100;
  // Проходимся по каждому элементу в списке весов
  weightedSummands.value.map((summand) => {
    // Отнимаем очередной элемент от результата
    skillweight -= summand;
  });
  // Возвращаем остаток
  return skillweight;
});

/*****************************/
/***** Качество продукта *****/
/*****************************/

/**
 * В этой переменной будет храниться список взвешенных суммантов.
 * Качества, полученные от ингредиентов.
 * Нужно для подсчитывания, поскольку от дочерних компонентов
 * передаются лишь новые значения, а не старые.
 */
const qualitySummands: Ref<number[]> = ref([]);

/**
 * Обновляет одно из слагаемых для подсчёта суммы качества.
 * @param weight новое значение веса
 * @param index индекс в списке весов
 */
const updateQualitySummands = (weight: number, index: number): void => {
  qualitySummands.value[index] = weight;
};

/**
 * Подсчёт качества продукта.
 * Высчитывается, как сумма качеств, приносимых от ингридиентов,
 * навыка, инструмента и производственного здания.
 */
 const quality = computed((): number => {
  /* Результат будет сумма отдельных слагаемых
   * от ингредиентов, навыка, инструмента и
   * производственного здания.
   */
  let quality = Math.floor(
    skillweight.value * (
      (props.skillLevel as number) +
      (props.clothingLevel as number)/5
    )/100
  );
  // Проходимся по каждому элементу в списке весов
  qualitySummands.value.map((summand) => {
    // Отнимаем очередной элемент от результата
    quality += summand;
  });
  // Возвращаем остаток, но он не должен быть выше уровня навыка
  return Math.min(
    quality,
    Math.floor(props.skillLevel as number)
  );
});
</script>

<template>
  <v-card
    class="my-3"
  >
    <v-card-item>
      <v-card-title>
        {{
          // @ts-ignore
          $t("game."+props.recipe?.name)
        }} {{ quality }}
      </v-card-title>
    </v-card-item>

    <v-card-text>
      <show-material-info
        v-for="(material, index) in props.recipe?.materials"
        :key="index"
        :index="index"
        :material="material"
        @updateSummand="updateQualitySummands"
        @returnWeigt="updateWeight"
      ></show-material-info>
    </v-card-text>
  </v-card>
</template>
