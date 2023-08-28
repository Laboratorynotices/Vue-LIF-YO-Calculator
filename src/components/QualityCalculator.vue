<script setup lang="ts">
import type { Skill } from "@/types";
import importedSkill from "@/recipes.json";
import CardRecipe from "./CardRecipe.vue";

const skill = importedSkill as Skill;
</script>

<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel
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
