import { Groups } from '@/components/common/enums/GroupsEnum.js'

const CuratorPageStore = {
    namespaced: true,
    state: {
        allInterns: [
            {
                id: 1,
                name: `Ким Юрий Михайлович`,
                group: Groups.GROUP_112.number,
                department: Groups.GROUP_112.dept,
                medical: false,
                vacation: true
            },
            {
                id: 2,
                name: `Жуков Павел Юрьевич`,
                group: Groups.GROUP_105.number,
                department: Groups.GROUP_105.dept,
                medical: true,
                vacation: false
            }
        ],
        shownInterns: [],
        isFiltered: false
    },
    mutations: {
        setShownInterns(state) {
            state.shownInterns = state.allInterns
        },
        sortInternsBy(state, value) {
            state.shownInterns.sort((x, y) => {
                if (typeof x[value] === `string`) {
                  return x[value].localeCompare(y[value]);
                }
                if (typeof x[value] === `number` || typeof x[value] === `boolean`) {
                  return x[value] - y[value];
                }
                return 0;
              })
        },
        filterInternsBy(state, option) {
            state.shownInterns = state.allInterns.filter(intern => intern[option.valueName] === option.value)
            if (!state.isFiltered) {
                state.isFiltered = true
            }
        },
        resetFilters(state) {
            state.shownInterns = state.allInterns
            state.isFiltered = false
        }
    }
}

export default CuratorPageStore