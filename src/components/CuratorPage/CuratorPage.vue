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
            <v-row
                class="ml-2"
            >
                <custom-v-menu
                    :classes="`mb-2`"
                    :title="`Сортировать по ${selectedSortOption}`"
                >
                    <v-list-item
                        v-for="option in sortOptions" 
                        @click="sortBy(option)"
                    >
                        {{ option.name }}
                    </v-list-item>
                </custom-v-menu>
            </v-row>
            <interns-table
                :interns="interns"
            />
        </v-col>
    </v-row>
</template>

<script>
import InternsTable from '@/components/CuratorPage/Interns/InternsTable.vue'
import CustomVMenu from '@/components/common/CustomVMenu.vue'
import { mapState, mapMutations } from 'vuex'

export default {
    components: {
        InternsTable,
        CustomVMenu
    },
    data() {
        return {
            sortOptions: [
                { name: `ФИО`, value: `name` },
                { name: `группе`, value: `group` },
                { name: `отделу`, value: `department` },
                { name: `отпуску`, value: `vacation` },
                { name: `больничному`, value: `medical` },
            ],
            selectedSortOption: ``,
        }
    },
    computed: {
        ...mapState({
            interns: state => state.CuratorPageStore.shownInterns
        })
    },
    methods: {
        ...mapMutations({
            setShownInterns: `CuratorPageStore/setShownInterns`,
            sortInternsBy: `CuratorPageStore/sortInternsBy`
        }),
        sortBy(option) {
            this.selectedSortOption = option.name
            this.sortInternsBy(option.value)
        }
    },
    mounted() {
        this.setShownInterns()
    }
}
</script>