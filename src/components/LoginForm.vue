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
            <small class="red--text">{{ this.error }}</small>
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
        login(){
          const payload = {
            email: this.email,
            password: this.password
          };
          this.error = null;
          this.$store.dispatch('login', payload)
          .then(() => this.$router.push({name: 'Home'}))
          .catch(err => this.error = err);
        }
    }
})

</script>