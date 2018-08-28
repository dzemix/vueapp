<template>
  <div>
    <input type="text" v-model="email">
    <input type="text" v-model="password">
    <button @click="register">register</button>
    <br>
    <div v-html="error"></div>
  </div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data)
      } catch (err) {
        this.error = err.response.data.error
      }
    }
  }
}
</script>
<style scoped>

</style>
