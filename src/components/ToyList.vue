<template>
<h2>list!!!!</h2>
<RouterLink class="btn btn-add" to="/toy/edit">Add Toy</RouterLink>
<ToyPreview 
              v-for="toy in toys" 
              :key="toy._id"   
              :toy="toy" 
              @removed="$emit('removed', toy._id)" 
              />
<!-- <pre>{{ toys }}</pre> -->
      <!-- <section class="toy-list">
        <RouterLink class="btn btn-add" to="/toy/edit">Add</RouterLink>
        <ul v-if="toys.length" class="clean-list">
          <ToyPreview 
              v-for="toy in toys" 
              :key="toy._id"   
              :toy="toy" 
              />
              @removed="$emit('removed', toy._id)" 
              @toggled="$emit('toggled', toy)" 
        </ul>
        <p v-else>No toys to show..</p>
      </section> -->
  
</template>

<script>
import ToyPreview from '../components/ToyPreview.vue'
export default {
  name: 'ToyList',
  props: ['toys'],
 
  components: {
    ToyPreview,
  },
}
</script>