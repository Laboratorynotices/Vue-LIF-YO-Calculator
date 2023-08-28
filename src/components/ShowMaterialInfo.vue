<script setup lang="ts">
import type { Material } from "@/types";

// Данные, теперь получаем от "родительского" элемента
const props = defineProps({
  material: {
    // Хитрый приём, чтобы определить тип (а не интерфейс) переменной
    type: Object as () => Material
  }
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
