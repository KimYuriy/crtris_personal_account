const CuratorPageStore = {
    namespaced: true,
    state: {
        allInterns: [
            {
                id: 1,
                name: `Ким Юрий Михайлович`,
                group: 112,
                department: `ОВП`,
                medical: false,
                vacation: true
            },
            {
                id: 2,
                name: `Жуков Павел Юрьевич`,
                group: 105,
                department: `ДуТиБА`,
                medical: true,
                vacation: false
            }
        ],
        shownInterns: []
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
        }
    }
}

export default CuratorPageStore