const InternPageStore = {
    namespaced: true,
    state: {
        isFiltered: false,
        firstName: "Имя",
        secondName: "Фамилия",
        group: 112,
        rating: 8,

        tasks: [
            {
              id: 1,
              name: "HEX-редактор",
              type: {
                type: "Task",
                name: "Пр. задание"
              },
              status: "WIP",
              beginDate: "28.12.2023",
              endDate: "",
              expired: false
            },
            {
              id: 2,
              name: "Java - базовый курс",
              type: {
                type: "Course",
                name: "Уч. курс"
              },
              status: "Done",
              beginDate: "25.12.2023",
              endDate: "",
              expired: true
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
          if (typeof x[value] === 'string') {
            return x[value].localeCompare(y[value]);
          }
          if (typeof x[value] === 'number') {
            return x[value] - y[value];
          }
          return 0;
        })
      },
      filterTasksBy(state, option) {
        state.shownTasks = state.tasks.filter(task => task[option.valueName] === option.value)
        console.log(state.tasks)
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