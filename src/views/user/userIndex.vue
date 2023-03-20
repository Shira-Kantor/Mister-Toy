<template>
      <section class="user-profile">
        <pre v-if="user">{{ user }}</pre>
        <pre v-else>No user logged in</pre>
     
      <router-link class="btn" to="/toy">Back</router-link>
    </section>
</template>
<script>
export default {
  

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
