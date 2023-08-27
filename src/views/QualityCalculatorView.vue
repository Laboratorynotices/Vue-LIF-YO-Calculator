<script setup lang="ts">
import recipesAll from "@/recipes.json";
</script>

<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel
      v-for="(recipesBySkill, skillName, skillIndex) in recipesAll"
      :key="skillIndex"
      :title="skillName"
    >
      <v-expansion-panel-text>
        {{ recipesBySkill }}
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
