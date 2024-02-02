<template>
    <v-card class="px-3 py-2">
        <v-card-title>
            {{ task.name }} - {{ task.type }}
        </v-card-title>
        <v-text>
            Дата начала: {{ task.beginDate }}
        </v-text>
        <v-text>
            Дата окончания: {{ task.endDate === ``? `-` : task.endDate }}
        </v-text>
        <v-text>
            Статус: {{ task.status }}
        </v-text>
        <v-text>
            Ссылка на задачу: <a :href="task.url">{{ task.url }}</a>
        </v-text>
    </v-card>
</template>

<script setup>
const props = defineProps({
    task: {
        type: Object,
        required: true
    }
})
</script>