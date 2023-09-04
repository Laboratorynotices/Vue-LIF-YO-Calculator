<script setup lang="ts">
import { navElements } from "@/menu-elements";
</script>

<template>
  <v-btn
    v-for="(navElement, i) in navElements"
    :key="i"
    :to="{ name: navElement.name }"
    variant="text"
  >{{
    // @ts-ignore
    $t("navigation."+navElement.nameMenu)
  }}</v-btn>
</template>
