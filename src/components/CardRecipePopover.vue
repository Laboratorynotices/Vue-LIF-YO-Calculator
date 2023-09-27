<script setup lang="ts">
import type { Recipe } from '@/types';

// Данные получаем от "родительского" элемента
const props = defineProps({
  // Рецепт
  recipe: {
// Хитрый приём, чтобы определить тип (а не интерфейс) переменной
type: Object as () => Recipe
  },
  // Уровень навыка
  skillLevel: Number,
  // Уровень профессиональной одежды
  clothingLevel: Number,
  // Уровень инструмента
  toolLevel: Number,
  // Уровень верстака
  workbenchLevel: Number,
  // Используется примитивный инструмент
  primitiveTool: Boolean,
  // Есть ли бонус у верстака
  workbenchBonus: Boolean
});
</script>

<template>
  <v-menu
    activator="parent"
    location="bottom"
    open-on-hover
    :close-on-content-click="false"
  >
    <v-card min-width="300" max-width="600" class="pb-1">
      <v-card-title>
        {{
          // @ts-ignore
          $t("game." + props.recipe?.name)
        }}
      </v-card-title>

      <v-container class="mb-3">
        <v-row>
          <v-col class="py-0 my-0">
            {{
              // @ts-ignore
              $t("Required")
            }}:
          </v-col>
          <v-col cols="3" class="py-0 my-0">
            {{
              // @ts-ignore
              $t("Influence")
            }}:
          </v-col>
        </v-row>

        <v-row
          v-for="(material, index) in props.recipe?.materials"
          :key="index"
        >
          <v-col class="py-0 my-0">
            <b>- {{ material.quantity }}x</b>
            {{
              // @ts-ignore
              $t("game."+material.name)
            }}:
          </v-col>
          <v-col cols="3" class="py-0 my-0">
            {{ material.weight }}%
          </v-col>
        </v-row>
      </v-container>

      <v-container
        v-if="props.recipe?.toolWeight || props.recipe?.workbenchWeight"
        class="mb-3"
      >
        <v-row v-if="props.recipe?.toolWeight">
          <v-col class="py-0 my-0">
            {{
              // @ts-ignore
              $t("Tool")
            }}
          </v-col>
          <v-col cols="3" class="py-0 my-0">
            {{ props.recipe?.toolWeight }}%
          </v-col>
        </v-row>
        <v-row v-if="props.recipe?.workbenchWeight">
          <v-col class="py-0 my-0">
            {{
              // @ts-ignore
              $t("Device")
            }}
          </v-col>
          <v-col cols="3" class="py-0 my-0">
            {{ props.recipe?.workbenchWeight }}%
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-menu>
</template>
