
<template>
  <main>
    <LoginSignup v-if="!user"></LoginSignup>
    <img class="logo" src="../assets/img/logo.png">
  </main>
</template>

<script>
import LoginSignup from '../components/LoginSignup.vue';

export default {
  name: 'HomeView',
  computed:{

    user(){
      return this.$store.getters.user
    },
  },
  methods:{
logout(){
  this.$store.dispatch({type: 'logout'})
}
  },
  components: {
    LoginSignup
  }
}
</script>