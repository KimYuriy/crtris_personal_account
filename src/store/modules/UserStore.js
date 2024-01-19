import { Groups } from "@/components/common/enums/GroupsEnum"
import { Roles } from "@/components/common/enums/RolesEnum"

const UserStore = {
    namespaced: true,
    state: {
        firstName: ``,
        secondName: ``,
        group: Groups.GROUP_DEFAULT,
        rating: 10.5,
        role: Roles.ROLE_INTERN
    },
    mutations: {
        setUserData(state, payload) {
            state.firstName = payload.firstName
            state.secondName = payload.secondName
            state.group = payload.group
            state.rating = payload.rating
            state.role = payload.role
        }
    }
}

export default UserStore