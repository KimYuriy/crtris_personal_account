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
            <v-spacer>
            </v-spacer>
            <v-text
                class="mr-5"
            >
                {{ firstName }} {{ secondName }} №{{ group }}
            </v-text>
            <v-menu
                :location="bottom"
            >
                <template
                    v-slot:activator="{ props }"
                >
                    <v-btn
                        v-bind="props"
                        icon="$vuetify"
                    >
                    </v-btn>
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
export default {
    data() {
        return {
            options: [
                { title: 'Мой профиль', path: '/' },
                { title: 'Профиль куратора', path: '/curator' },
                // { title: 'Отчеты', path: '/'},
                // { title: 'Настройки', path: '/' }
            ],
            firstName: "Имя",
            secondName: "Фамилия",
            group: "000"
        }
    }
}
</script>
