<template>
  <div>
<!--     <navbar-fixed /> -->
    <v-layout align-center justify-center column>
      <div class="LoginPanel">
        <div class="loginspan">
          <span>Login</span>
        </div>
          <v-text-field
            single-line
            solo
            placeholder="email"
          ></v-text-field>
          <v-text-field
            single-line
            solo
            placeholder="password"
          ></v-text-field>
  <div class="text-xs-center">
    <v-btn round color="primary" dark>Rounded Button</v-btn>
  </div>

      </div>
        <div class="text-xs-center">
    <v-btn round color="primary" dark>Rounded Button</v-btn>
        </div>
    </v-layout>
  </div>
</template>
<script>
// import NavbarFixed from '@/components/NavbarFixed'
import AuthenticationService from '@/services/AuthenticationService'
export default {
  // components: {
  //   NavbarFixed
  // },
  data () {
    return {
      email: '',
      password: '',
      error: ''
    }
  },
  methods: {
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setUser', response.data)
        this.$router.push({
          name: 'home'
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<style scoped>
/*.layout {
  text-align: center;
  margin-top:100px;
}*/
.LoginPanel{
  padding:10px;
  margin-top:200px;
  width:350px;
  border: 1px solid #eeeeee;
}
.loginspan{
  text-align: center;
  font-size: 35px;
  margin-bottom: 15px;
}
</style>
