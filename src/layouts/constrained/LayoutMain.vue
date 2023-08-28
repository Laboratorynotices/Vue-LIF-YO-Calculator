<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./NavBar.vue";
import LeftColumn from "./ContainerLeftСolumn.vue";
import DummyComponent from "@/components/DummyComponent.vue";
</script>

<template>
  <v-app id="inspire">
    <nav-bar></nav-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <left-column></left-column>

          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
              class="pa-6"
            >
              <!--  -->
              <RouterView />
              <dummy-component></dummy-component>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
