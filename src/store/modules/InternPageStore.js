import { TaskTypes } from '@/components/common/enums/TasksEnum.js'
import { TaskStatuses } from '@/components/common/enums/TaskStatusesEnum.js'

const InternPageStore = {
    namespaced: true,
    state: {
        isFiltered: false,
        tasks: [
            {
              id: 1,
              name: `HEX-редактор`,
              type: TaskTypes.PRACTICAL_TASK,
              status: TaskStatuses.WIP,
              beginDate: `28.12.2023`,
              endDate: ``,
              expired: false,
              url: `https://somelink.ru`
            },
            {
              id: 2,
              name: `Java - базовый курс`,
              type: TaskTypes.COURSE,
              status: TaskStatuses.DONE,
              beginDate: `25.12.2023`,
              endDate: `27.12.2023`,
              expired: true,
              url: `https://somelink.ru`
            }
        ],
        shownTasks: []
    },
    mutations: {
      setShownTasks(state) {
        state.shownTasks = state.tasks
      },
      sortTasksBy(state, value) {
        state.shownTasks.sort((x, y) => {
          if (typeof x[value] === `string`) {
            return x[value].localeCompare(y[value]);
          }
          if (typeof x[value] === `number` || typeof x[value] === `boolean`) {
            return x[value] - y[value];
          }
          return 0;
        })
      },
      filterTasksBy(state, option) {
        state.shownTasks = state.tasks.filter(task => task[option.valueName] === option.value)
        if (!state.isFiltered) {
          state.isFiltered = true
        }
      },
      resetFilters(state) {
        state.shownTasks = state.tasks
        state.isFiltered = false
      }
    }
}

export default InternPageStore