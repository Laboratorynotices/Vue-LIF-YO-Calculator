<script setup lang="ts">
import type { Recipe } from "@/types";
import importedRecipe from "@/recipes.json";
import ShowMaterialInfo from "./ShowMaterialInfo.vue"

const recipe = importedRecipe as Recipe;
</script>

<template>
  <v-card
    class="my-3"
  >
    <v-card-item>
      <v-card-title>{{ recipe.name }}</v-card-title>
    </v-card-item>

    <v-card-text>
      <show-material-info
        v-for="(material, index) in recipe.materials"
        :key="index"
        :material="material"
      ></show-material-info>
    </v-card-text>
  </v-card>
</template>
