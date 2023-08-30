<script setup lang="ts">
import AboutInstruction from "@/components/AboutInstruction.vue";
</script>


<template>
  <h1 class="mb-6">
    {{
      // @ts-ignore
      $t("This will not be translated")
    }}
  </h1>
  <about-instruction></about-instruction>
</template>
