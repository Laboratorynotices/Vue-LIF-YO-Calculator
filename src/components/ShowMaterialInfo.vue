<script setup lang="ts">
import type { Material } from "@/types";
import type { Ref } from "vue";
import { computed, onMounted, ref } from "vue";

/**
 * Определяем emit для обратной связи с родительским компонентом.
 */
const emit = defineEmits<{
  // Регистрируем событие, которое должно возвращать вес ингредиента.
  (e: "returnWeigt", weight: number, index: number): void,
  // Регистрируем событие, которое должно возвращать качество от ингредиента.
  (e: "updateSummand", weightedSummand: number, index: number): void
}>();

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
        variant="outlined"
      ></v-text-field>
    </template>
  </v-slider>
</template>
