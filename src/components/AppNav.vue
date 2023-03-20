<template>
  <img class="logo-shira" src="../assets/img/shira.jpg">
  <nav class="nav-header">
    <RouterLink class="nava first" to="/"><button class="nav-btn">Home</button> </RouterLink>
    <RouterLink class="nava" to="/about"><button class="nav-btn">About</button> </RouterLink>
    <RouterLink to="/review"><button class="nav-btn">Reviews</button></RouterLink>
    <RouterLink class="nava" to="/map"><button class="nav-btn">Map</button> </RouterLink>
    <RouterLink class="nava" to="/chart"><button class="nav-btn">Chart</button> </RouterLink>
    <RouterLink class="nava" to="/toy"><button class="nav-btn">Toy</button></RouterLink>
    <button class="nav-btn" v-if="user" @click="logout">Logout {{ user.fullname }}</button>

  </nav>
  <div class="user">
    <!-- <p>Hello, {{ fullName }}</p> -->
    <router-link class="btn" to="/user">Profile</router-link>
  </div>
</template>

<script>
export default {
  name: 'AppNav',
  methods: {
    logout() {
      this.$store.dispatch({ type: 'logout' })
    }
  },
  computed: {
    fullName() {
      return this.$store.getters.user.fullname
    },
    user() {
      return this.$store.getters.user
    }
  }
}
</script>

<style></style>