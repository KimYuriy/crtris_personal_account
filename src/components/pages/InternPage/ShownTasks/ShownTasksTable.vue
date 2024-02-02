<template>
    <custom-table :header="header">
        <tr
            v-for="task in tasks"
            :key="task.id"
        >
            <custom-modal-menu 
                :activator="`parent`"
                :taskData="task"
            >
                <task-modal-menu :task="task" />
            </custom-modal-menu>
            <td> {{ task.name }} </td>
            <td> {{ task.type }} </td>
            <td> {{ task.status }} </td>
            <td> {{ task.beginDate }} </td>
            <td> {{ task.endDate }} </td>
            <td> {{ task.expired === true? `Да` : `Нет` }} </td>
        </tr>
    </custom-table>
</template>

<script setup>
import CustomTable from '@/components/common/widgets/CustomTable.vue'
import CustomModalMenu from '@/components/common/widgets/CustomModalMenu.vue'
import TaskModalMenu from '@/components/pages/InternPage/ShownTasks/TaskModalMenu.vue'
import { ref } from 'vue'

const props = defineProps({
    tasks: {
        type: Array,
        required: true
    }
})

const header = ref([
    `Название`,
    `Тип`,
    `Статус`,
    `Дата начала`,
    `Дата окончания`,
    `Просрочено`
])
</script>