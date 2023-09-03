<script setup lang="ts">
import { languageSwitcher } from "@/i18n/languageSwitcherClass";
import { ref, type Ref } from "vue";

/**
 * Хранилище для значения переключателя языков.
 */
const selectedLanguage: Ref<string> = ref(languageSwitcher.actualLocale);
</script>

<template>
  <div class="mt-6">
    <v-select
      v-model="selectedLanguage"
      density="compact"
      :items="languageSwitcher.availableLocalesForSelect"
      item-title="itemTitle"
      item-value="itemValue"
      @update:model-value="languageSwitcher.switchLocale(selectedLanguage)"
    ></v-select>
  </div>
</template>

<style scoped>
div {
  width: 160px;
}
</style>
