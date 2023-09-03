<script setup lang="ts">
import MainNav from "./MainNav.vue";
import NavBarAvatar from "./NavBarAvatar.vue";
import NavBarSearch from "./NavBarSearch.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
</script>

<template>
  <v-app-bar flat>
    <v-container class="mx-auto d-flex align-center justify-center">
      <nav-bar-avatar></nav-bar-avatar>

      <main-nav></main-nav>

      <v-spacer></v-spacer>

      <nav-bar-search></nav-bar-search>

      <language-switcher></language-switcher>
    </v-container>
  </v-app-bar>
</template>
