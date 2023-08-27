<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { navElements } from '@/menu-elements';

</script>

<template>
  <header>
    <div class="bg-green pa-2">
      {{
        // @ts-ignore
        $t("hello")
      }}
    </div>

    <div class="wrapper">
      <nav>
        <router-link
          v-for="(navElement, i) in navElements"
          :key="i"
          :to="navElement.path"
        >{{ navElement.nameMenu }}</router-link>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
