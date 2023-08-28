<script setup lang="ts">
import type { Recipe } from "@/types";
import importedRecipes from "@/recipes.json";
import CardRecipe from "./CardRecipe.vue";
</script>

<template>
  <card-recipe
    v-for="(recipe, index) in (importedRecipes as Recipe[])"
    :key="index"
    :recipe="recipe"
  ></card-recipe>
</template>
