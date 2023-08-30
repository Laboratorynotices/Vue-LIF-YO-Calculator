<script setup lang="ts">
import type { Recipe } from "@/types";
import CardRecipe from "./CardRecipe.vue";
import { ref } from "vue";

// Данные, теперь получаем от "родительского" элемента
const props = defineProps({
  recipes: {
    // Хитрый приём, чтобы определить тип (а не интерфейс) переменной
    type: Object as () => Recipe[]
  }
});

/**
 * Уровень навыка
 */
const skillLevel = ref(100);

/**
 * Уровень профессиональной одежды
 */
const clothingLevel = ref(0);
</script>

<template>
  <v-slider
    v-model="skillLevel"
    max="100"
    step="0.1"
    hide-details
    class="ma-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Level of skill")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="skillLevel"
        type="number"
        style="width: 100px"
        density="compact"
        hide-details
        max="100"
        min="0"
        variant="outlined"
      ></v-text-field>
    </template>
  </v-slider>

  <v-slider
    v-model="clothingLevel"
    max="100"
    step="1"
    hide-details
    class="ma-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Level of clothing")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="clothingLevel"
        type="number"
        style="width: 100px"
        density="compact"
        hide-details
        max="100"
        min="0"
        variant="outlined"
      ></v-text-field>
    </template>
  </v-slider>

  <card-recipe
    v-for="(recipe, index) in props.recipes"
    :key="index"
    :recipe="recipe"
    :skillLevel="skillLevel"
    :clothingLevel="clothingLevel"
  ></card-recipe>
</template>
