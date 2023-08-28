<script setup lang="ts">
import type { Material } from "@/types";

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
</script>

<template>
  {{ props.index }}
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
