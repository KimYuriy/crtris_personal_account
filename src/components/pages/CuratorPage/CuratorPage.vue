<template>
    <v-text class="d-flex justify-center">
        Список закрепленных стажеров
    </v-text>
    <v-row>
        <v-col sm="10">
            <v-row class="ml-2">
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
            <interns-table :interns="interns" />
        </v-col>
    </v-row>
</template>

<script setup>
import InternsTable from '@/components/pages/CuratorPage/Interns/InternsTable.vue'
import CustomVMenu from '@/components/common/widgets/CustomVMenu.vue'
import { useStore } from 'vuex'
import { onMounted, ref, computed } from 'vue'
import { useRouter } from 'vue-router'

const sortOptions = ref([
    { name: `ФИО`, value: `name` },
    { name: `группе`, value: `group` },
    { name: `отделу`, value: `department` },
    { name: `отпуску`, value: `vacation` },
    { name: `больничному`, value: `medical` }
])
const filterOptions = ref([
    { name: `тех, кто в отпуске`, valueName: `vacation`, value: true },
    { name: `тех, кто не в отпуске`, valueName: `vacation`, value: false },
    { name: `тех, кто на больничном`, valueName: `medical`, value: true },
    { name: `тех, кто не на больничном`, valueName: `medical`, value: false }
])
const selectedSortOption = ref(``)
const selectedFilterOption = ref(``)
const router = useRouter()
const store = useStore()

const interns = computed(() => store.state.CuratorPageStore.shownInterns)
const isFiltered = computed(() => store.state.CuratorPageStore.isFiltered)

const sortBy = (option) => {
    selectedSortOption.value = option.name
    store.commit(`CuratorPageStore/sortInternsBy`, option.value)
}

const filterBy = (option) => {
    selectedFilterOption.value = option.name
    store.commit(`CuratorPageStore/filterInternsBy`, option)
}

const resetFilters = () => {
    selectedFilterOption.value = ``
    store.commit(`CuratorPageStore/resetFilters`)
}

onMounted(() => {
    store.commit(`CuratorPageStore/setShownInterns`)
})
</script>