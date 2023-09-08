<script setup lang="ts">
import { languageSwitcher } from "@/i18n/languageSwitcherClass";
import { ref, watch, type Ref } from "vue";
import { useRouter } from "vue-router";

/**
 * Хранилище для значения переключателя языков.
 */
const selectedLanguage: Ref<string> = ref(languageSwitcher.actualLocale);

/**
 * Экземпляр маршрутизатора.
 * useRouter() может запускаться лишь внутри vue-файлов.
 */
const router = useRouter();

/**
 * Запускается при вызове события вызова языка.
 */
const replaceLocale = () => {
  // Всему приложению меняем язык
  languageSwitcher.switchLocale(selectedLanguage.value);

  // Пытаемся обновить локаль в адресе страницы
  try {
    router.replace({ params: { locale: selectedLanguage.value }})
  } catch (error) {
    console.error(error);
    router.push("/");
  }
};

/**
 * Наблюдаем за глобальным состоянием выбранного языка.
 * Может поменяться после "установки" этого компонента,
 * а computed в данном случае изменение не замечает.
 */
watch(
  // За какой меременной надо следить
  () => languageSwitcher.actualLocale,
  // передаём значение этой переменной в наблюдатель
  (newLocale: string) => {
    // Обновляем переменню
    selectedLanguage.value = newLocale;
  }
);
</script>

<template>
  <div class="mt-6">
    <v-select
      v-model="selectedLanguage"
      density="compact"
      :items="languageSwitcher.availableLocalesForSelect"
      item-title="itemTitle"
      item-value="itemValue"
      @update:model-value="replaceLocale"
    ></v-select>
  </div>
</template>

<style scoped>
div {
  width: 160px;
}
</style>
