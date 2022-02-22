<template>
  <div id="app">
    <button @click="loginFacebook()">
      Login
    </button>
    <button @click="logoutFacebook()">
      Logout
    </button>
  </div>
</template>

<script>
import firebase from '@/plugins/firebase'
// import axios from 'axios'

export default {
  name: 'App',
  methods: {
    async loginFacebook () {
      const res = await firebase.auth.signInWithPopup(firebase.provider)
      console.log(res)

      // await axios.get(
      //   `http://localhost:3000/facebook/get-lead?accesstoken=${res.credential?.accessToken}&uid=${res.user?.uid}`
      // )

      // uid
      // credential?.accessToken
    },
    async logoutFacebook () {
      await firebase.auth.signOut()
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
