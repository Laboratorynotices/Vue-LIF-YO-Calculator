<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';

/**
 * Качество баромсага
 */
const baromsagLevel: Ref<number> = ref(100);

/**
 * Начальное качество материала
 */
const startMaterialLevel: Ref<number> = ref(0);

/**
 * Конечное качество материала
 */
const resultMaterialLevel: Ref<number> = ref(0);

/**
 * Подсчитывает размер кучки материала.
 */
const materialStackSize = computed((): number => {
  /*
   * Используем формулу:
   * Material quality + (Baromsag quality * ((100 - Material quality)/100) / (Stack size/10)) 
   * Result = Material quality + (Baromsag quality * ((100 - Material quality)/100) / (Stack size/10))
   * Result - Material quality = (Baromsag quality * ((100 - Material quality)/100) / (Stack size/10))
   * Result - Material quality =  Baromsag quality * ((100 - Material quality)/100) / (Stack size/10)
   * (Result - Material quality) * (Stack size/10) = Baromsag quality * ((100 - Material quality)/100)
   * (Stack size/10) = Baromsag quality * ((100 - Material quality)/100) / (Result - Material quality)
   * Stack size = (Baromsag quality * ((100 - Material quality)/100) / (Result - Material quality)) * 10
   * Stack size = ((Baromsag quality * (100 - Material quality)/100) / (Result - Material quality)) * 10
   */
  return Math.floor(
    (
      (
        baromsagLevel.value *
        (100 - startMaterialLevel.value)/100
      ) /
      (resultMaterialLevel.value - startMaterialLevel.value)) * 10
  );
});
</script>

<template>
  <h1>{{
        // @ts-ignore
        $t("Material Stack Size")
      }}:
      {{ materialStackSize }}</h1>

  <v-slider
    v-model="baromsagLevel"
    max="100"
    step="1"
    hide-details
    thumb-label
    class="my-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Level of baromsag")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="baromsagLevel"
        type="number"
        style="width: 100px"
        density="compact"
        hide-details
        max="100"
        min="0"
        variant="outlined"
      ></v-text-field>
    </template>
  </v-slider>

  <v-slider
    v-model="startMaterialLevel"
    max="100"
    step="1"
    hide-details
    thumb-label
    class="my-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Start level of item")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="startMaterialLevel"
        type="number"
        style="width: 100px"
        density="compact"
        hide-details
        max="100"
        min="0"
        variant="outlined"
      ></v-text-field>
    </template>
  </v-slider>

  <v-slider
    v-model="resultMaterialLevel"
    max="100"
    step="1"
    hide-details
    thumb-label
    class="my-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Result Material Level")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="resultMaterialLevel"
        type="number"
        style="width: 100px"
        density="compact"
        hide-details
        max="100"
        min="0"
        variant="outlined"
      ></v-text-field>
    </template>
  </v-slider>
</template>
