<template>
  <div id="app">
    <AuthForm :data="data" :SubmitForm="Register()" action="Register" />
  </div>
</template>

<style scoped>
  #app {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 20px 0;
  }

  #app form {
    width: 30%;
  }
</style>

<script>
  export default {
    layout: 'Auth',
    middleware: 'User',
    asyncData() {
      return {
        data: {
          name: null,
          email: null,
          password: null,
        }
      }
    },

    methods: {
      Register() {

      }
    },

  }
</script>
