<template>
    <custom-table
        :header="header"
    >
        <tr
            v-for="task in tasks"
            :key="task.id"
        >
            <custom-modal-menu 
                :activator="`parent`"
                :taskData="task"
            >
                
            </custom-modal-menu>
            <td>
                {{ task.name }}
            </td>
            <td>
                {{ task.type }}
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
import CustomTable from '@/components/common/widgets/CustomTable.vue'
import CustomModalMenu from '@/components/common/widgets/CustomModalMenu.vue'

export default {
    components: {
        CustomTable,
        CustomModalMenu
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
    },
    emits: [`showTaskInfo`]
}
</script>