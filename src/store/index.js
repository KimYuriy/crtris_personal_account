import { createStore } from 'vuex'
import InternPageStore from '@/store/modules/InternPageStore.js'
import CuratorPageStore from '@/store/modules/CuratorPageStore'
import UserStore from '@/store/modules/UserStore'

export default createStore({
  modules: {
    InternPageStore,
    CuratorPageStore,
    UserStore
  }
})