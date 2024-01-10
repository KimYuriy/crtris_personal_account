<template>
    <custom-table
        :header="header"
    >
        <!-- @click - сюда прописать открытие модального окна -->
        <tr
            v-for="task in tasks"
            :key="task.id"
            @click=""
        >
            <td>
                {{ task.name }}
            </td>
            <td>
                {{ task.type.name }}
            </td>
            <td>
                {{ task.status }}
            </td>
            <td>
                {{ task.beginDate }}
            </td>
            <td>
                {{ task.endDate }}
            </td>
            <td>
                {{ task.expired === true? `Да` : `Нет` }}
            </td>
        </tr>
    </custom-table>
</template>

<script>
import CustomTable from '@/components/common/CustomTable.vue'

export default {
    components: {
        CustomTable
    },
    props: {
        tasks: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            header: [
                `Название`,
                `Тип`,
                `Статус`,
                `Дата начала`,
                `Дата окончания`,
                `Просрочено`
            ]
        }
    }
}
</script>