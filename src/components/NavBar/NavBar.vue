<template>
    <v-container
        fluid
    >
        <v-app-bar
            color="green"
        >
            <v-app-bar-title>
                Личный кабинет стажера ЦРТРИС
            </v-app-bar-title>
            <v-spacer />
            <v-text
                class="mr-5"
            >
                {{ firstName }} {{ secondName }} №{{ group }}
            </v-text>
            <v-menu
                :location="bottom"
            >
                <template
                    #activator="{ props }"
                >
                    <v-btn
                        v-bind="props"
                        icon="$vuetify"
                    />
                </template>

                <v-list>
                    <v-list-item
                        v-for="item in options"
                        @click="$router.push(item.path)"
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

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            options: [
                { title: `Мой профиль`, path: `/` },
                { title: `Профиль куратора`, path: `/curator` },
                { title: `Отчеты`, path: `/`},
                { title: `Настройки`, path: `/` }
            ]
        }
    },
    computed: {
        ...mapState({
            firstName: state => state.InternPageStore.firstName,
            secondName: state => state.InternPageStore.secondName,
            group: state => state.InternPageStore.group,
        })
    }
}
</script>