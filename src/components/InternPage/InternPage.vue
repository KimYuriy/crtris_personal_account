<template>
  <v-row>
    <v-col
      sm="9"
      class="d-flex flex-column"
    >
      <v-text
        class="d-flex justify-center"
      >
        СВОДКА
      </v-text>
      <v-row
        class="ml-2"
      >
        <v-text>
          Сортировать по {{ selectedSortOption }}
        </v-text>
        <v-menu
          :location="bottom"
        >
          <template
            v-slot:activator="{ props }"
          >
            <v-icon
              v-bind="props"
              icon="$vuetify"
            >
            </v-icon>
          </template>
          <v-list>
            <v-list-item
              v-for="option in sortOptions" 
              @click="sortBy(option)"
            >
              {{ option.name }}
            </v-list-item>
          </v-list>
        </v-menu>

        <v-text
          class="ml-5"
        >
          Показать только {{ selectedFilterOption }}
        </v-text>
        <v-menu
          :location="bottom"
        >
          <template
            v-slot:activator="{ props }"
          >
            <v-icon
              v-bind="props"
              icon="$vuetify"
            >
            </v-icon>
          </template>
          <v-list>
            <v-list-item
              v-for="option in filterOptions" 
              @click="filterBy(option)"
            >
              {{ option.name }}
            </v-list-item>
          </v-list>
        </v-menu>

        <v-btn
          v-if="isFiltered"
          @click="resetFilters"
        >
          Сбросить фильтры
        </v-btn>
      </v-row>
      <shown-task-table
        :tasks="tasks"
      />
    </v-col>

    <v-col
      class="d-flex justify-center flex-column"
      sm="3"
    >
      <v-img
        src="@/assets/person.jpg"
      >
      </v-img>
      <v-text
        class="d-flex justify-center"
      >
        {{ firstName }} {{ secondName }}, группа {{ group }}
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
import ShownTaskTable from '@/components/InternPage/ShownTasks/ShownTasksTable.vue'
import { mapState, mapMutations } from 'vuex'

export default {
  components: {
    ShownTaskTable
  },
  data() {
    return {
      sortOptions: [
        { name: "названию", value: "name"},
        { name: "типу задачи", value: "type.type"},
        { name: "статусу", value: "status"},
        { name: "дате начала", value: "beginDate"},
        { name: "статусу просрочки", value: "expired" },
      ],
      selectedSortOption: "",
      filterOptions: [
        { name: "учебные проекты", valueName: "type.type", value: "Course"},
        { name: "практические задачи", valueName: "type.type", value: "Task" },
        { name: "статус WIP", valueName: "status", value: "WIP"},
        { name: "статус Done", valueName: "status", value: "Done" },
        { name: "выполненные задачи", valueName: "expired", value: false },
        { name: "просроченные задачи", valueName: "expired", value: true },
      ],
      selectedFilterOption: ""
    }
  },
  computed: {
    ...mapState({
      tasks: state => state.InternPageStore.shownTasks,
      firstName: state => state.InternPageStore.firstName,
      secondName: state => state.InternPageStore.secondName,
      group: state => state.InternPageStore.group,
      rating: state => state.InternPageStore.rating,
      isFiltered: state => state.InternPageStore.isFiltered
    })
  },
  methods: {
    ...mapMutations({
      sortTasksBy: 'InternPageStore/sortTasksBy',
      filterTasksBy: 'InternPageStore/filterTasksBy',
      resetFilters: 'InternPageStore/resetFilters'
    }),
    sortBy(option) {
      this.selectedSortOption = option.name
      this.sortTasksBy(option.value)
    },
    filterBy(option) {
      this.selectedFilterOption = option.name
      this.filterTasksBy(option)
      this.selectedFilterOption = ""
    }
  }
}
</script>