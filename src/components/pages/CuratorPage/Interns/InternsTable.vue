<template>
    <custom-table :header="header">
        <tr
            v-for="intern in interns"
            :key="intern.id"
        >
            <td> {{ intern.name }} </td>
            <td> {{ intern.group }} </td>
            <td> {{ intern.department }} </td>
            <td>
                <v-checkbox-btn v-model="intern.vacation" />
            </td>
            <td>
                <v-checkbox-btn v-model="intern.medical" />
            </td>
            <td> Посмотреть отчеты </td>
        </tr>
    </custom-table>
</template>

<script setup>
import CustomTable from '@/components/common/widgets/CustomTable.vue'
import { ref } from 'vue'

const props = defineProps({
    interns: {
        type: Array,
        required: true
    }
})

const header = ref([
    `ФИО`,
    `Группа`,
    `Отдел`,
    `Отпуск`,
    `Больничный`,
    `Отчеты`
])
</script>