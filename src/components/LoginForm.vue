<template>
  <v-card
      elevation="2"
      shaped
      class="mx-auto mt-5"
      max-width="400"
      :loading="loading"
  >
    <v-card-title>Login</v-card-title>
    <form @submit.prevent="login">
        <v-card-text>
            <v-text-field
                label="E-Mail"
                v-model="email"
                type="email"
            ></v-text-field>
            <v-text-field
                :label="$t('loginPasswordLabel')"
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
  </v-card>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
    name: "LoginView",
    data() {
        return {
            email: null,
            password: null,
            error: null,
            loading: false,
        }
    },
    methods: {
        login(){
          this.loading = true;
          const payload = {
            email: this.email,
            password: this.password
          };
          this.error = null;
          this.$store.dispatch('login', payload)
          .then(() => this.$router.push({name: 'Home'}))
          .catch((err) => {
            this.error = err;
            this.loading = false;
          });
        }
    }
})

</script>