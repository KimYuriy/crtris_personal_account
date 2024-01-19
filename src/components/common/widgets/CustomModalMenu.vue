<template>
    <v-dialog
        v-model="dialog"
        width="auto"
        :activator="activator"
    >
        <slot></slot>
    </v-dialog>
</template>

<script>
export default {
    data() {
        return {
            dialog: false
        }
    },
    props: {
        activator: {
            type: String,
            required: true
        }
    }
}
</script>