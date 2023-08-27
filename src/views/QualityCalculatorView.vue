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
        <v-card
          v-for="(recipe, product, recipeIndex) in recipesBySkill"
          :key="recipeIndex"
          class="my-3"
        >
          <v-card-item>
            <v-card-title>{{ product }}</v-card-title>
          </v-card-item>

          <v-card-text>
            {{ recipe }}
          </v-card-text>
        </v-card>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>
