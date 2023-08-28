<script setup lang="ts">
import type { Skill } from "@/types";
import CardsRecipes from "./CardsRecipes.vue";
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
        <cards-recipes :recipes="skill.recipes"></cards-recipes>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
