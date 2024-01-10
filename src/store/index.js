import { createStore } from 'vuex'
import InternPageStore from '@/store/modules/InternPageStore.js'
import CuratorPageStore from '@/store/modules/CuratorPageStore'

export default createStore({
  modules: {
    InternPageStore,
    CuratorPageStore
  }
})