<template>
  <v-row>
    <v-col
      sm="9"
      class="d-flex flex-column"
    >
      <v-text
        class="d-flex justify-center mb-2"
      >
        СВОДКА
      </v-text>
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
          @click="resetAllFilters"
        >
          Сбросить фильтры
        </v-text>
      </v-row>
      <shown-task-table
        @showTaskInfo="showTaskInfo"
        :tasks="tasks"
      />
    </v-col>

    <v-col
      class="d-flex justify-center flex-column"
      sm="3"
    >
      <v-img
        src="@/assets/person.jpg"
      />
      <v-text
        class="d-flex justify-center"
      >
        {{ firstName }} {{ secondName }}, группа {{ group.number }}
      </v-text>
      <v-container>
        <v-text
          class="d-flex justify-center"
        >
          Рейтинг: {{ rating }}
        </v-text>
      </v-container>
    </v-col>

  </v-row>
</template>

<script>
import ShownTaskTable from '@/components/pages/InternPage/ShownTasks/ShownTasksTable.vue'
import CustomVMenu from '@/components/common/widgets/CustomVMenu.vue'
import { TaskTypes } from '@/components/common/enums/TasksEnum'
import { TaskStatuses } from '@/components/common/enums/TaskStatusesEnum'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    ShownTaskTable,
    CustomVMenu
  },
  data() {
    return {
      sortOptions: [
        { name: `названию`, value: `name`},
        { name: `типу задачи`, value: `type`},
        { name: `статусу выполнения`, value: `status`},
        { name: `дате начала`, value: `beginDate` },
        { name: `статусу просрочки`, value: `expired` },
      ],
      selectedSortOption: ``,
      filterOptions: [
        { name: `учебные курсы`, valueName: `type`, value: TaskTypes.COURSE },
        { name: `практические задачи`, valueName: `type`, value: TaskTypes.PRACTICAL_TASK },
        { name: `статус WIP`, valueName: `status`, value: TaskStatuses.WIP },
        { name: `статус Done`, valueName: `status`, value: TaskStatuses.DONE },
        { name: `выполненные задачи`, valueName: `expired`, value: false },
        { name: `просроченные задачи`, valueName: `expired`, value: true },
      ],
      selectedFilterOption: ``,
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.InternPageStore.shownTasks,
      isFiltered: state => state.InternPageStore.isFiltered,
      firstName: state => state.UserStore.firstName,
      secondName: state => state.UserStore.secondName,
      group: state => state.UserStore.group,
      rating: state => state.UserStore.rating
    })
  },
  methods: {
    ...mapMutations({
      sortTasksBy: `InternPageStore/sortTasksBy`,
      filterTasksBy: `InternPageStore/filterTasksBy`,
      resetFilters: `InternPageStore/resetFilters`,
      setShownTasks: `InternPageStore/setShownTasks`
    }),
    sortBy(option) {
      this.selectedSortOption = option.name
      this.sortTasksBy(option.value)
    },
    filterBy(option) {
      this.selectedFilterOption = option.name
      this.filterTasksBy(option)
    },
    resetAllFilters() {
      this.selectedFilterOption = ``
      this.resetFilters()
    },
    showTaskInfo(taskId) {
      const task = this.tasks.find((task) => task.id === taskId)
    }
  },
  mounted() {
    this.setShownTasks()
  }
}
</script>