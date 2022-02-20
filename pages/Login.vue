<template>
  <div id="app">
    <AuthForm :data="data" :SubmitForm="Login" action="Login" :GoogleAuth="GoogleAuth" />
  </div>
</template>

<style scoped>
  #app {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }
</style>

<script>
  export default {
    layout: 'Auth',
    middleware: 'User',
    asyncData() {
      return {
        data: {
          email: '',
          password: '',
        }
      }
    },

    methods: {
      Login() {
        this.$store.dispatch('Login', this.data)
      },

      async GoogleAuth() {
        await this.$auth.loginWith('social', { params: { another_post_key: 'value' } })
      }
    }
  }
</script>
