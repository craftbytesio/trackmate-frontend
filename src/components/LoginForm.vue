<template>
    <form @submit.prevent="login">
        <v-card-text>
            <v-text-field
                label="Email"
                v-model="email"
                type="email"
            ></v-text-field>
            <v-text-field
                label="Paswort"
                v-model="password"
                type="password"
            ></v-text-field>
            <v-small class="red--text">{{ this.error }}</v-small>
        </v-card-text>
        <v-card-actions>
            <v-btn
            outlined
            rounded
            block
            color="primary"
            @click="login"
            >
            <v-icon>mdi-swim</v-icon> Login
            </v-btn>
        </v-card-actions>
    </form>
</template>

><script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: "LoginView",
    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },
    methods: {
        async login(){
            this.error = "Can't login " + this.email
        }
    }
})

</script>