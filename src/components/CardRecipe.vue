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

/**
 * Хранилище для весов компонентов
 */
const weightedSummands: Ref<number[]> = ref([]);

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

/**
 * Обновляет один из весов компонентов
 * @param weight новое значение веса
 * @param index индекс в списке весов
 */
const updateWeight = (weight: number, index: number): void => {
  weightedSummands.value[index] = weight;
};
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
        }} {{ skillweight }} {{ props.skillLevel }} {{ props.clothingLevel }}
      </v-card-title>
    </v-card-item>

    <v-card-text>
      <show-material-info
        v-for="(material, index) in props.recipe?.materials"
        :key="index"
        :index="index"
        :material="material"
        @returnWeigt="updateWeight"
      ></show-material-info>
    </v-card-text>
  </v-card>
</template>
