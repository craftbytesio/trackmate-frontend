<template>
    <v-card 
      elevation="2"
      shaped
      class="mx-auto mt-5"
      max-width="400"
    >
      <v-card-title>Login</v-card-title>
      <LoginForm class="p-5 bg-white border rounded shadow" />
      
    </v-card>
</template>

<script>
import Vue from 'vue'
import LoginForm from '@/components/LoginForm.vue'

export default Vue.extend({ 
  name: "LoginView",
  components: {
    LoginForm,
  },
});
</script>