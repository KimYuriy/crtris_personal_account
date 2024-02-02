<template>
    <v-dialog
        v-model="dialog"
        width="auto"
        :activator="activator"
    >
        <slot></slot>
    </v-dialog>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    activator: {
        type: String,
        required: true
    }
})
const dialog = ref(false)
</script>