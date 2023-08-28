<script setup lang="ts">
import type { Recipe } from "@/types";
import ShowMaterialInfo from "./ShowMaterialInfo.vue"

// Данные, теперь получаем от "родительского" элемента
const props = defineProps({
  recipe: {
    // Хитрый приём, чтобы определить тип (а не интерфейс) переменной
    type: Object as () => Recipe
  }
});
</script>

<template>
  <v-card
    class="my-3"
  >
    <v-card-item>
      <v-card-title>{{ props.recipe?.name }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <show-material-info
        v-for="(material, index) in props.recipe?.materials"
        :key="index"
        :material="material"
      ></show-material-info>
    </v-card-text>
  </v-card>
</template>
