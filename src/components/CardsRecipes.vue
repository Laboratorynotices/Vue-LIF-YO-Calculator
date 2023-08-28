<script setup lang="ts">
import type { Recipe } from "@/types";
import CardRecipe from "./CardRecipe.vue";

// Данные, теперь получаем от "родительского" элемента
const props = defineProps({
  recipes: {
    // Хитрый приём, чтобы определить тип (а не интерфейс) переменной
    type: Object as () => Recipe[]
  }
});
</script>

<template>
  <card-recipe
    v-for="(recipe, index) in props.recipes"
    :key="index"
    :recipe="recipe"
  ></card-recipe>
</template>
