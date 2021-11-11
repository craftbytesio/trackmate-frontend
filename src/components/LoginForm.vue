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
import AuthService from '@/service/AuthService';
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
          const payload = {
            email: this.email,
            password: this.password
          };
          this.error = null;
          try {
            await AuthService.login(payload);
            const authUser = await this.$store.dispatch("auth/getAuthUser");
            if (authUser) {
              this.$router.push("/home");
            } else {
              const error = Error(
                  "Unable to fetch user after login, check your API settings."
              );
              error.name = "Fetch User";
              throw error;
            }
          } catch (error){
            this.error = error;
          }
        }
    }
})

</script>