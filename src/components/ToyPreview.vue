<template>
  <li class="toy-preview">
   
    <h2>{{ toy.name }}</h2>
    <button class="delete-btn" @click="$emit('removed')">X</button>
    <RouterLink
              :to="'/toy/edit/' + toy._id"
              class="btn">
              <span>Edit</span>
            </RouterLink>
            <RouterLink
              :to="'/toy/details/' + toy._id"
              class="btn">
              <span>Details</span>
            </RouterLink>
            </li>
</template>
<script>
export default {
  name: 'ToyPreview',
  props: ['toy'], 
  emits: ['removed'],

  }
</script>