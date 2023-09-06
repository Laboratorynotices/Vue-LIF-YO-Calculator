<script setup lang="ts">
import { navElements } from "@/menu-elements";
import { languageSwitcher } from "@/i18n/languageSwitcherClass";
</script>

<template>
  <v-btn
    v-for="(navElement, i) in navElements"
    :key="i"
    :to="languageSwitcher.i18nRoute({ name: navElement.name })"
    variant="text"
    exact
  >{{
    // @ts-ignore
    $t("navigation."+navElement.nameMenu)
  }}</v-btn>
</template>
