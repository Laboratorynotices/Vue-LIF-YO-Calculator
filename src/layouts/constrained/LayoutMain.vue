<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./NavBar.vue";
import LeftColumn from "./ContainerLeftСolumn.vue";
import DummyComponent from "@/components/DummyComponent.vue";
import { ref, type Ref } from "vue";
import { languageSwitcher } from "@/i18n/languageSwitcherClass";
import { onMounted } from "vue";

/**
 * Показывать ли основное содержание сайта или же
 * символ загрузки
 */
const isLoading: Ref<boolean> = ref(true);

onMounted(() => {
  /*
  * Загружаем первый перевод,
  * на котором открываем приложение.
  */
  (async () => {
    await languageSwitcher.loadingFirstLocale();
    isLoading.value = false;
  })();
});
</script>

<template>
  <v-app id="inspire" v-if="!isLoading">
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
  <div
    v-else
    class="progress-circular"
    style="height: 500px;"
  >
    <v-container class="fill-height">
      <v-row
        no-gutters
      >
        <v-progress-circular
          color="primary"
          indeterminate='disable-shrink'
          :size="128"
          :width="12"
          class="ma-auto"
        ></v-progress-circular>
      </v-row>
    </v-container>
  </div>
</template>
