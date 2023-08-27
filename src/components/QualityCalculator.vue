<script setup lang="ts">
import type { Material } from "@/types";
import importedMaterial from "@/recipes.json";
</script>

<template>
  <p
    v-for="(value, keyOfMaterial, index) in (importedMaterial as Material)"
    :key="index"
  >
    {{ index }}. {{ keyOfMaterial }} = {{ value }}
  </p>
</template>
