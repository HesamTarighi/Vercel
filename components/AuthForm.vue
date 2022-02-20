<template>
  <div id="app-comp">
    <form>
      <input type="text" placeholder="Name..." v-model="data.name" v-if="action == 'Register'">
      <input type="text" placeholder="Email..." v-model="data.email">
      <input type="text" placeholder="Password..." v-model="data.password">
      <v-btn
        class="mr-4"
        @click="SubmitForm()"
      >
        {{ action }}
      </v-btn>
      <v-btn
        class="mr-4"
        @click="GoogleAuth()"
      >
        {{ action }} With Google
      </v-btn>
    </form>
  </div>
</template>

<style scoped>
  #app-comp {
    width: 30%;
  }

  form {
    width: 100%;
  }

  form input[type = "text"] {
    display: block;
    width: 250px;
    height: auto;
    padding: .5rem 1rem;
    margin: 1rem;
    border: 1px solid #fff;
    border-radius: 10000px;
    color: #fff;
  }
</style>

<script>
  export default {
    props: [
      'data',
      'SubmitForm',
      'action',
      'GoogleAuth'
    ],
  }
</script>
