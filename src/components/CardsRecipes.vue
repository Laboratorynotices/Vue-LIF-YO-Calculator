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

/**
 * Уровень инструмента
 */
const toolLevel = ref(100);

/**
 * Уровень верстака
 */
const workbenchLevel = ref(100);
</script>

<template>
  <!-- skillLevel slider -->
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

  <!-- clothingLevel slider -->
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

  <!-- toolLevel slider -->
  <v-slider
    v-model="toolLevel"
    max="100"
    step="1"
    hide-details
    class="ma-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Level of tool")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="toolLevel"
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

  <!-- workbenchLevel slider -->
  <v-slider
    v-model="workbenchLevel"
    max="100"
    step="1"
    hide-details
    class="ma-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Level of workbench")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="workbenchLevel"
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
    :toolLevel="toolLevel"
    :workbenchLevel="workbenchLevel"
  ></card-recipe>
</template>
