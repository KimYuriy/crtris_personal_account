<template>
    <v-card
        class="mx-auto"
        max-width="500"
    >
        <v-text
            class="d-flex justify-center mt-5"
        >
            Авторизация в аккаунте стажера ЦРТРИС
        </v-text>
        <v-form
            v-model="form"
            @submit.prevent="authorize"
            class="px-5 py-5"
        >
            <v-text-field
                v-model="login"
                :rules="[required]"
                label="Логин"
                clearable
                type="text"
            />
            <v-text-field
                class="my-2"
                v-model="password"
                :rules="[required]"
                label="Пароль"
                clearable
                type="password"
            />
            <v-btn
                :disabled="!form"
                block
                color="success"
                size="large"
                type="submit"
                variant="elevated"
            >
                Авторизоваться
            </v-btn>
        </v-form>
    </v-card>
</template>

<script>
import { mapMutations } from 'vuex'
import { Groups } from '@/components/common/enums/GroupsEnum'
import { Roles } from "@/components/common/enums/RolesEnum"

export default {
    data() {
        return {
            login: ``,
            password: ``,
            form: false
        }
    },
    methods: {
        ...mapMutations({
            setUserData: `UserStore/setUserData`
        }),
        authorize() {
            // Тут будет запрос на сервер на получение данных пользователя. В запросе передать login и password
            const userData = {
                firstName: `Юрий`,
                secondName: `Ким`,
                group: Groups.GROUP_112,
                rating: 10.5,
                role: Roles.ROLE_CURATOR
            }
            this.setUserData(userData)
            this.login = ``
            this.password = ``
            this.$router.push(`/intern`)
        },
        required(v) {
            return !!v || `Обязательно!`
        }
    }
}
</script>