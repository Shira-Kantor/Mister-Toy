<template>
  <RouterLink  to="/toy/edit"><button class="btn btn-add">Add Toy</button> </RouterLink>
  <section className="toy-list">
    <ToyPreview v-for="toy in toys" :key="toy._id" :toy="toy" @removed="$emit('removed', toy._id)" />

  </section>
 
</template>

<script>
import ToyPreview from '../components/ToyPreview.vue'
export default {
  name: 'ToyList',
  emits: ['removed'],
  props: {
    toys: Array
  },

  components: {
    ToyPreview,
  },
}
</script>