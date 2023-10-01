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
 * Размер стопки материала
 */
const materialStackSize: Ref<number> = ref(10);

/**
 * Подсчитывает качество, которое должно получиться после
 * улучшения материала баромсагом.
 */
const resultMaterialLevel = computed((): number => {
  /*
   * Используем формулу:
   * Material quality + (Baromsag quality * ((100 - Material quality)/100) / (Stack size/10)) 
   */
  return Math.floor(
    startMaterialLevel.value +
    (
      baromsagLevel.value *
      ((100 - startMaterialLevel.value)/100) /
      (materialStackSize.value/10)
    )
  );
});
</script>

<template>
  <h1>{{
        // @ts-ignore
        $t("Result")
      }}:
      {{ resultMaterialLevel }}</h1>

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
    v-model="materialStackSize"
    max="100"
    step="1"
    hide-details
    thumb-label
    class="my-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Material Stack Size")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="materialStackSize"
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
