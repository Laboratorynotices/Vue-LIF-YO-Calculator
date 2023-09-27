<script setup lang="ts">
import type { Recipe } from "@/types";
import CardRecipePopover from "./CardRecipePopover.vue";
import ShowMaterialInfo from "./ShowMaterialInfo.vue";
import { computed, onMounted, ref, type Ref } from "vue";

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
  clothingLevel: Number,
  // Уровень инструмента
  toolLevel: Number,
  // Уровень верстака
  workbenchLevel: Number,
  // Используется примитивный инструмент
  primitiveTool: Boolean,
  // Есть ли бонус у верстака
  workbenchBonus: Boolean
});

/**
 * Определяем emit для обратной связи с родительским компонентом.
 */
const emit = defineEmits({
  /**
   * Регистрируем событие, которое должно вызываться,
   * если для рецепта нужен инструмент.
   */
  toolNeeded: Boolean,
  /**
   * Регистрируем событие, которое должно вызываться,
   * если для рецепта нужен инструмент.
   */
  workbenchNeeded: Boolean
});

/******************************/
/********* Вес навыка *********/
/******************************/

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
 * Вес влияния инструмента на качество продукта.
 * Вначале проверяем передаётся ли это значение от
 * родительского компанента.
 */
const toolWeight: number =
  (
    props.recipe?.toolWeight !== undefined &&
    props.recipe?.toolWeight !== null
  ) ?
  props.recipe?.toolWeight :
  0;

/**
 * Вес влияния верстака на качество продукта.
 * Вначале проверяем передаётся ли это значение от
 * родительского компанента.
 */
const workbenchWeight: number =
  (
    props.recipe?.workbenchWeight !== undefined &&
    props.recipe?.workbenchWeight !== null
  ) ?
  props.recipe?.workbenchWeight :
  0;

/**
 * Вес самого навыка.
 * Высчитывается, как остаток после остальных весов.
 * Если вес инструмента и верстака заданы, то они тоже отнимаются.
 */
const skillweight = computed((): number => {
  /* Результат будет остаток от 100 после вычитания
   * веса инструмента,
   * веса верстака
   * и весов ингредиентов
   */
  let skillweight =
    100
    - toolWeight
    - workbenchWeight;

  // Проходимся по каждому элементу в списке весов
  weightedSummands.value.map((summand) => {
    // Отнимаем очередной элемент от результата
    skillweight -= summand;
  });

  // Возвращаем остаток
  return skillweight;
});

/******************************/
/***** Качество продукта ******/
/******************************/

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
  /* Результат будет - сумма отдельных слагаемых
   * от ингредиентов, навыка, инструмента и
   * производственного здания.
   */
  let quality = Math.floor(
    skillweight.value * (
      (props.skillLevel as number) +
      (props.clothingLevel as number)/5
    )/100
  );

  // Добавляем качество от инструмента
  quality += Math.floor(
    toolWeight * (props.toolLevel as number)/100
  );

  // Добавляем качество от верстака
  quality += Math.floor(
    workbenchWeight * (props.workbenchLevel as number)/100
  );

  // Проходимся по каждому элементу в списке весов
  qualitySummands.value.map((summand) => {
    // Добавляем качество от очередного элемента
    quality += summand;
  });

  /* бонус import.meta.env.VITE_PRODUCTION_BUILDING_BONUS
   * на производство при помощи спецпроизводства.
   */
  if (props.workbenchBonus) {
    quality = Math.floor(
      quality *
      (1 + import.meta.env.VITE_PRODUCTION_BUILDING_BONUS/100)
    );
  }

  // штраф при использовании примитивного инструмента.
  if (props.primitiveTool) {
    /* При использовании примитивного инструмента
     * половина качества теряется.
     */
    quality = Math.floor(quality/2);
  }

  // Возвращаем сумму, но он не должен быть выше уровня навыка
  return Math.min(
    quality,
    Math.floor(props.skillLevel as number)
  );
});

/*
 * Когда компонент соберёмся выполнем несколько функций.
 */
onMounted(() => {
  // Если в рецепте указан вес инструмента...
  if (
    props.recipe?.toolWeight !== undefined &&
    props.recipe?.toolWeight !== null)
    {
      /* ...вызываем событие toolNeeded,
       * чтобы отобразить поле ввода уровня инструмента
       */
      emit("toolNeeded");
    };
  // Если в рецепте указан вес инструмента...
  if (
    props.recipe?.workbenchWeight !== undefined &&
    props.recipe?.workbenchWeight !== null)
    {
      /* ...вызываем событие toolNeeded,
       * чтобы отобразить поле ввода уровня инструмента
       */
      emit("workbenchNeeded");
    };
});
</script>

<template>
  <v-card
    class="my-3"
  >
    <v-card-item>
      <v-card-title>
        <img
          :src="props.recipe?.src"
          :alt="props.recipe?.name"
          :title="props.recipe?.name"
        />
        {{
          // @ts-ignore
          $t("game."+props.recipe?.name)
        }} {{ quality }}
        <card-recipe-popover :recipe="props.recipe"></card-recipe-popover>
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

<style scoped>
img {
  height: 1em;
}
</style>
