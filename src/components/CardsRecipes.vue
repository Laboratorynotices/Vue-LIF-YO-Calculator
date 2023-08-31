<script setup lang="ts">
import type { Recipe } from "@/types";
import CardRecipe from "./CardRecipe.vue";
import { ref, type Ref } from "vue";

// Данные, теперь получаем от "родительского" элемента
const props = defineProps({
  recipes: {
    // Хитрый приём, чтобы определить тип (а не интерфейс) переменной
    type: Object as () => Recipe[]
  },
  // Надо ли отображать поле ввода уровня одежды
  professionalClothing: Boolean
});

/**
 * Уровень навыка
 */
const skillLevel: Ref<number> = ref(100);

/**
 * Уровень профессиональной одежды
 */
const clothingLevel: Ref<number> = ref(0);

/**
 * Уровень инструмента
 */
const toolLevel: Ref<number> = ref(100);

/**
 * Используется ли примитивный инструмент
 */
const primitiveTool: Ref<boolean> = ref(false);

/**
 * Есть ли бонус у верстака?
 */
const workbenchBonus: Ref<boolean> = ref(false);

/**
 * Уровень верстака
 */
const workbenchLevel = ref(100);

/**
 * Надо ли показывать поле ввода уровня инструментов
 */
const showToolInputField: Ref<boolean> = ref(false);

/**
 * Изменяет переменную setShowToolInputFieldTrue,
 * чтобы поля ввода информации об инструменте отображались.
 */
const setShowToolInputFieldTrue = (): void => {
  showToolInputField.value = true;
}

/**
 * Надо ли показывать поле ввода уровня инструментов
 */
const showWorkbenchInputField: Ref<boolean> = ref(false);

/**
 * Изменяет переменную setShowToolInputFieldTrue,
 * чтобы поля ввода информации об инструменте отображались.
 */
const setShowWorkbenchInputFieldTrue = (): void => {
  showWorkbenchInputField.value = true;
}
</script>

<template>
  <!-- skillLevel slider -->
  <v-slider
    v-model="skillLevel"
    max="100"
    step="0.1"
    hide-details
    class="ma-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Level of skill")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="skillLevel"
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

  <!-- clothingLevel slider -->
  <v-slider
    v-if="props.professionalClothing"
    v-model="clothingLevel"
    max="100"
    step="1"
    hide-details
    class="ma-4"
  >
    <template v-slot:prepend>
      {{
        // @ts-ignore
        $t("Level of clothing")
      }}
    </template>
    <template v-slot:append>
      <v-text-field
        v-model="clothingLevel"
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

  <!-- Блок отображающий поле ввода уровня инструмента -->
  <div v-if="showToolInputField">
    <!-- toolLevel slider -->
    <v-slider
      v-model="toolLevel"
      max="100"
      step="1"
      hide-details
      class="ma-4"
    >
      <template v-slot:prepend>
        {{
          // @ts-ignore
          $t("Level of tool")
        }}
      </template>
      <template v-slot:append>
        <v-text-field
          v-model="toolLevel"
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

    <!-- primitiveTool switch -->
    <v-switch
      v-model="primitiveTool"
      hide-details
      color="red"
    >
      <template v-slot:label>{{
        // @ts-ignore
        $t("Is primitive tool?")
      }}</template>
    </v-switch>
  </div>

  <!-- Блок отображающий поле ввода уровня верстака -->
  <div v-if="showWorkbenchInputField">
    <!-- workbenchLevel slider -->
    <v-slider
      v-model="workbenchLevel"
      max="100"
      step="1"
      hide-details
      class="ma-4"
    >
      <template v-slot:prepend>
        {{
          // @ts-ignore
          $t("Level of workbench")
        }}
      </template>
      <template v-slot:append>
        <v-text-field
          v-model="workbenchLevel"
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

    <!-- workbenchBonus switch -->
    <v-switch
      v-model="workbenchBonus"
      hide-details
      color="blue"
    >
      <template v-slot:label>{{
        // @ts-ignore
        $t("Has workbench bonus?")
      }}</template>
    </v-switch>
  </div>

  <card-recipe
    v-for="(recipe, index) in props.recipes"
    :key="index"
    :recipe="recipe"
    :skillLevel="skillLevel"
    :clothingLevel="clothingLevel"
    :toolLevel="toolLevel"
    :primitiveTool="primitiveTool"
    :workbenchBonus="workbenchBonus"
    :workbenchLevel="workbenchLevel"
    @toolNeeded.once="setShowToolInputFieldTrue"
    @workbenchNeeded.once="setShowWorkbenchInputFieldTrue"
  ></card-recipe>
</template>
