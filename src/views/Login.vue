<template>
      <LoginForm class="p-5 bg-white border rounded shadow" />
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