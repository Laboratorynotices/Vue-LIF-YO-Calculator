<script setup lang="ts">
import type { Material } from "@/types";
import type { Ref } from "vue";
import { computed, onMounted, ref } from "vue";

/**
 * Определяем emit для обратной связи с родительским компонентом.
 */
const emit = defineEmits({
  /**
   * Регистрируем событие, которое должно возвращать вес ингредиента.
   * Прописываем два параметра у этого события.
   * А так же логику валидации.
   * Должно возвращать true, когда всё в порядке.
   */
  returnWeigt: (weight: number, index: number): boolean => {
    return (
      (
        // Вес должен быть больше или равен нулю и...
        0 <= weight &&
        // Вес должен быть меньше или равень сотни...
        weight <= 100
      ) &&
      // а так же индекс должен быть больше или равен нулю.
      index >= 0
    );
  },
  // Регистрируем событие, которое должно возвращать качество от ингредиента.
  updateSummand: (weight: number, index: number): boolean => {
    return (
      (
        // Качество должно быть больше или равен нулю и...
        0 <= weight &&
        weight <= 100
        // Качество должено быть меньше или равень сотни...
      ) &&
      // а так же индекс должен быть больше или равен нулю.
      index >= 0
    );
  }
});


// Данные, теперь получаем от "родительского" элемента
const props = defineProps({
  // Описание ингридиента
  material: {
    // Хитрый приём, чтобы определить тип (а не интерфейс) переменной
    type: Object as () => Material
  },
  // индекс в списке родительского компонента
  index: Number
});

/**
 * Качества материала
 */
const materialLevel: Ref<number> = ref(100);

/**
 * Взвешенный суммант, округлённый вниз,
 * для подсчёта качества продукта.
 * Это же качество, идущее от этого ингредиента.
 */
const weightedSummand = computed((): number => {
  // Возвращаем округлённое вниз значение
  return Math.floor(
    // Качество материала умножаем на
    materialLevel.value*
    // взвешенный фактор, выраженный в процентах.
    (props.material?.weight as number)/100
  );
});

/*
 * Когда компонент соберёмся выполнем несколько функций.
 */
onMounted(() => {
  // Вызываем событие returnWeigt и передаём вес ингредиента
  emit(
    "returnWeigt",
    (props.material?.weight as number),
    (props.index as number)
  );
  /* Вызываем событие updateSummand
   * и передаём передаваемое качество от ингредиента
   */
  emit(
    "updateSummand",
    weightedSummand.value,
    (props.index as number)
  );
});
</script>

<template>
  <v-slider
    v-model="materialLevel"
    max="100"
    step="1"
    hide-details
    thumb-label
    @update:model-value="emit('updateSummand', weightedSummand, (props.index as number))"
    class="my-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("game."+props.material?.name)
      }} x {{ props.material?.quantity }}
      <br />
      {{
        // @ts-ignore
        $t('Level of item')
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="materialLevel"
        type="number"
        style="width: 100px"
        density="compact"
        hide-details
        @update:model-value="emit('updateSummand', weightedSummand, (props.index as number))"
        max="100"
        min="0"
        variant="outlined"
      ></v-text-field>
    </template>
  </v-slider>
</template>
