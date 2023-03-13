
<template>
    <h1>
        toy index
    </h1>
    <!-- {{ msg }} -->
   <!-- <pre>{{ toys }}</pre>  -->
    <ToyList :toys="toys" 
    @removed="removeToy"/>
</template>

<script>
import ToyList from '../components/ToyList.vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
export default {

    name: 'ToyIndex',
    computed: {
        msg() {
            console.log(this.$store.getters.getMsg);
            return this.$store.getters.getMsg
        },
        toys() {
            return this.$store.getters.toysToDisplay
        },
    },
    methods: {
    removeToy(toyId) {
      this.$store
        .dispatch({ type: 'removeToy', toyId })
        .then(() => {
          showSuccessMsg('Toy removed')
        })
        .catch(err => {
          showErrorMsg('Cannot remove toy')
        })
    }
    },
    components: {
        ToyList
    }
}
</script>

<style></style>