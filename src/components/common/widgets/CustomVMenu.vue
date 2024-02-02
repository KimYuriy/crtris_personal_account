<template>
  <v-text :class="classes">
    {{ title }}
  </v-text>
  <v-menu :location="bottom">
    <template #activator="{ props }">
      <v-icon
        v-bind="props"
        icon="$vuetify"
      />
    </template>
    <v-list>
      <slot></slot>
    </v-list>
  </v-menu>
</template>

<script setup>
const props = defineProps({
  classes: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>