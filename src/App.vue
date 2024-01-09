<template>
  <v-app>
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue'
import { mapMutations } from 'vuex'

export default {
  components: {
    NavBar
  },
  methods: {
    ...mapMutations({
      setShownTasks: 'InternPageStore/setShownTasks'
    })
  },
  created() {
    this.setShownTasks()
  }
}
</script>
