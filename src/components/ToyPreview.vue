<template>
  <li class="toy-preview toy">
    <h2>{{ toy.name }}</h2>
    <h4>Price: {{ toy.price }} €</h4>
    <img class="toy-img" :src="imgUrl" alt="" />
    <section class="pre-btn">

<section class="admin" v-if="user.isAdmin">

  <button class="delete-btn pre" @click="$emit('removed')">X</button>

  <RouterLink :to="'/toy/edit/' + toy._id">
    <button class="btn pre">Edit</button>
  </RouterLink>
</section>
  
      <RouterLink :to="'/toy/details/' + toy._id"> <button class="btn pre">
          Details</button>
      </RouterLink>
    </section>


  </li>
</template>
<script>
export default {
  name: 'ToyPreview',
  props: { toy: Object },
  emits: ['removed'],
  data() {
    return {
      imgUrl: `src/assets/img/${this.toy.name}.jpg`,
      user: this.$store.getters.user
    }
  },
  // computed: {
  //   imgUrl(){
  //     return `src/assets/img/${this.toy.name}.jpg`
  //   }
  // }
  methods: {
    getimg() {
      if (!imgUrl) return `src/assets/img/Ball.jpg`
    }
  }
}
</script>