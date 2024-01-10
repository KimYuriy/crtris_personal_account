<template>
    <v-text
          :class="classes"
        >
          {{ title }}
        </v-text>
        <v-menu
          :location="bottom"
        >
          <template
            v-slot:activator="{ props }"
          >
            <v-icon
              v-bind="props"
              icon="$vuetify"
            >
            </v-icon>
          </template>
          <v-list>
            <slot></slot>
          </v-list>
        </v-menu>
</template>

<script>
export default {
    props: {
        classes: {
            type: String,
            required: true
        },
        title: {
            type: String,
            required: true
        },
    }
}
</script>