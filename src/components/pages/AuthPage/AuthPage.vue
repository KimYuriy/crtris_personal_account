<template>
    <v-card
        class="mx-auto"
        max-width="500"
    >
        <v-text class="d-flex justify-center mt-5">
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

<script setup>
import { Groups } from '@/components/common/enums/GroupsEnum'
import { Roles } from "@/components/common/enums/RolesEnum"
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

const store = useStore()
const router = useRouter()
const login = ref(``)
const password = ref(``)
const form = ref(false)

const authorize = () => {
    const userData = {
        firstName: `Юрий`,
        secondName: `Ким`,
        group: Groups.GROUP_112,
        rating: 10.5,
        role: Roles.ROLE_CURATOR
    }
    store.commit(`UserStore/setUserData`, userData)
    login.value = ``
    password.value = ``
    router.push(`/intern`)
}

const required = (v) => !!v || `Обязательно!`
</script>