<script setup lang="ts">
import type { Skill } from "@/types";
import CardRecipe from "./CardRecipe.vue";
import skills from "@/recipes.json";
</script>

<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel
      v-for="(skill, index) in (skills as Skill[])"
      :key="index"
      :title="skill.name"
    >
      <v-expansion-panel-text>
        <card-recipe
          v-for="(recipe, index) in skill.recipes"
          :key="index"
          :recipe="recipe"
        ></card-recipe>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
