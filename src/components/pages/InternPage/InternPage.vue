<template>
  <v-row>
    <v-col
      cols="9"
      class="d-flex flex-column"
    >
      <v-text class="d-flex justify-center mb-5">
        СВОДКА
      </v-text>
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
          @click="resetAllFilters"
        >
          Сбросить фильтры
        </v-text>
      </v-row>
      <shown-task-table :tasks="tasks" />
    </v-col>

    <v-col
      class="d-flex justify-center flex-column"
      cols="2"
    >
      <v-img src="@/assets/person.jpg" />
      <v-text class="d-flex justify-center">
        {{ firstName }} {{ secondName }}, группа {{ group.number }}
      </v-text>
      <v-container>
        <v-text class="d-flex justify-center">
          Рейтинг: {{ rating }}
        </v-text>
      </v-container>
    </v-col>

  </v-row>
</template>

<script setup>
import ShownTaskTable from '@/components/pages/InternPage/ShownTasks/ShownTasksTable.vue'
import CustomVMenu from '@/components/common/widgets/CustomVMenu.vue'
import { TaskTypes } from '@/components/common/enums/TasksEnum'
import { TaskStatuses } from '@/components/common/enums/TaskStatusesEnum'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'

const sortOptions = ref([
  { name: `названию`, value: `name`},
  { name: `типу задачи`, value: `type`},
  { name: `статусу выполнения`, value: `status`},
  { name: `дате начала`, value: `beginDate` },
  { name: `статусу просрочки`, value: `expired` }
])
const filterOptions = ref([
  { name: `учебные курсы`, valueName: `type`, value: TaskTypes.COURSE },
  { name: `практические задачи`, valueName: `type`, value: TaskTypes.PRACTICAL_TASK },
  { name: `статус WIP`, valueName: `status`, value: TaskStatuses.WIP },
  { name: `статус Done`, valueName: `status`, value: TaskStatuses.DONE },
  { name: `выполненные задачи`, valueName: `expired`, value: false },
  { name: `просроченные задачи`, valueName: `expired`, value: true }
])
const selectedSortOption = ref(``)
const selectedFilterOption = ref(``)

const store = useStore()
const tasks = computed(() => store.state.InternPageStore.shownTasks)
const isFiltered = computed(() => store.state.InternPageStore.isFiltered)
const firstName = computed(() => store.state.UserStore.firstName)
const secondName = computed(() => store.state.UserStore.secondName)
const group = computed(() => store.state.UserStore.group)
const rating = computed(() => store.state.UserStore.rating)

const sortBy = (option) => {
  selectedSortOption.value = option.name
  store.commit(`InternPageStore/sortTasksBy`, option.value)
}

const filterBy = (option) => {
  selectedFilterOption.value = option.name
  store.commit(`InternPageStore/filterTasksBy`, option)
}

const resetAllFilters = () => {
  selectedFilterOption.value = ``
  store.commit(`InternPageStore/resetFilters`)
}

onMounted(() => {
  store.commit(`InternPageStore/setShownTasks`)
})
</script>