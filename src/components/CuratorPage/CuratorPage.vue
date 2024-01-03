<template>
    <v-text
        class="d-flex justify-center"
    >
        Список закрепленных стажеров
    </v-text>
    <v-row>
        <v-col
            sm="10"
        >
            <interns-table
                :interns="interns"
            />
        </v-col>
    </v-row>
</template>

<script>
import InternsTable from '@/components/CuratorPage/Interns/InternsTable.vue'

export default {
    components: {
        InternsTable
    },
    data() {
        return {
            interns: [
                {
                    id: 1,
                    name: "Ким Юрий Михайлович",
                    group: 112,
                    department: "ОВП",
                    medical: false,
                    vacation: true
                }
            ]
        }
    }
}
</script>