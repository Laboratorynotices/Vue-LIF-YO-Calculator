<script setup lang="ts">
import type { Material } from "@/types";
import { onMounted } from "vue";

/**
 * Определяем emit для обратной связи с родительским компонентом.
 */
const emit = defineEmits<{
  // Регистрируем событие, которое должно возвращать взвешенное слагаемое.
  (e: "returnWeigt", weight: number, index: number): void
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

/*
 * Когда компонент соберёмся выполнем несколько функций.
 */
onMounted(() => {
  // Вызываем событие returnWeigt и передаём вес сумманта
  emit(
    "returnWeigt",
    (props.material?.weight as number),
    (props.index as number)
  );
});
</script>

<template>
  <p
    v-for="(value, keyOfMaterial, index) in props.material"
    :key="index"
  >
    {{ index }}. {{ keyOfMaterial }} =
    {{
      // @ts-ignore
      $t("game."+value)
    }}
  </p>
</template>
