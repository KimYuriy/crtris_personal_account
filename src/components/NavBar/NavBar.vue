<template>
    <v-container fluid>
        <v-app-bar color="green">
            <v-app-bar-title>
                Личный кабинет {{ route.path === `/curator`? `куратора` : `стажера` }} ЦРТРИС
            </v-app-bar-title>
            <v-spacer />
            <v-text
                v-if="route.path !== `/`"
                class="mr-5"
            >
                {{ firstName }} {{ secondName }} №{{ group.number }}
            </v-text>
            <v-menu
                v-if="route.path !== `/`"
                :location="bottom"
            >
                <template #activator="{ props }">
                    <v-btn
                        v-bind="props"
                        icon="$vuetify"
                    />
                </template>

                <v-list>
                    <v-list-item
                        v-for="item in options"
                        @click="router.push(item.path)"
                    >
                        <v-list-item-title>
                            {{ item.title }}
                        </v-list-item-title>
                    </v-list-item>
                </v-list>

            </v-menu>
        </v-app-bar>
    </v-container>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'

const options = ref([
    { title: `Профиль стажера`, path: `/intern` },
    { title: `Профиль куратора`, path: `/curator` },
    { title: `Отчеты`, path: `/intern`},
    { title: `Настройки`, path: `/intern` },
    { title: `Выйти из аккаунта`, path: `/` }
])
const router = useRouter()
const route = useRoute()
const store = useStore()

const firstName = computed(() => store.state.UserStore.firstName)
const secondName = computed(() => store.state.UserStore.secondName)
const group = computed(() => store.state.UserStore.group)
const role = computed(() => store.state.UserStore.role)
</script>