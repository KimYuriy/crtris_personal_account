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
                    :classes="`ml-2 mb-2`"
                    :title="`Сортировать по ${selectedSortOption}`"
                >
                    <v-list-item
                        v-for="option in sortOptions" 
                        @click="sortBy(option)"
                    >
                        {{ option.name }}
                    </v-list-item>
                </custom-v-menu>

                <custom-v-menu
                    :classes="`ml-5 mb-2`"
                    :title="`Показать только ${selectedFilterOption}`"
                >
                    <v-list-item
                        v-for="option in filterOptions"
                        @click="filterBy(option)"
                    >
                        {{ option.name }}
                    </v-list-item>
                </custom-v-menu>

                <v-text
                    v-if="isFiltered"
                    class="ml-5"
                    @click="resetFilters"
                >
                    Очистить фильтры
                </v-text>

            </v-row>
            <interns-table
                :interns="interns"
            />
        </v-col>
    </v-row>
</template>

<script>
import InternsTable from '@/components/pages/CuratorPage/Interns/InternsTable.vue'
import CustomVMenu from '@/components/common/widgets/CustomVMenu.vue'
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
            filterOptions: [
                { name: `тех, кто в отпуске`, valueName: `vacation`, value: true },
                { name: `тех, кто не в отпуске`, valueName: `vacation`, value: false },
                { name: `тех, кто на больничном`, valueName: `medical`, value: true },
                { name: `тех, кто не на больничном`, valueName: `medical`, value: false }
            ],
            selectedFilterOption: ``
        }
    },
    computed: {
        ...mapState({
            interns: state => state.CuratorPageStore.shownInterns,
            isFiltered: state => state.CuratorPageStore.isFiltered
        })
    },
    methods: {
        ...mapMutations({
            setShownInterns: `CuratorPageStore/setShownInterns`,
            sortInternsBy: `CuratorPageStore/sortInternsBy`,
            filterInternsBy: `CuratorPageStore/filterInternsBy`,
            resetAllFilters: `CuratorPageStore/resetFilters`
        }),
        sortBy(option) {
            this.selectedSortOption = option.name
            this.sortInternsBy(option.value)
        },
        filterBy(option) {
            this.selectedFilterOption = option.name
            this.filterInternsBy(option)
        },
        resetFilters() {
            this.selectedFilterOption = ``
            this.resetAllFilters()

        }
    },
    mounted() {
        this.setShownInterns()
    }
}
</script>