<template>
    <h2>ddd</h2>
    <!-- <h3>{{ toy }}</h3> -->
    <section v-if="toy" class="toy-details">
        <p>Name:  {{ toy.name }}</p>
        <p>Price: {{ toy.price }}</p>
        <p>In stock: {{ toy.inStock }}</p>
        <pre>{{ toy }}</pre>

        <router-link to="/toy">Back</router-link>
    </section>
</template>


<script>
import { toyService } from '../services/toy.service.js'

export default {
    watch: {
        '$route.params': {
            handler() {
                const { toyId } = this.$route.params

                toyService.getById(toyId)
                    .then(toy => (this.toy = toy))
            },
            immediate: true,
        },
    },
    data() {
        return {
            toy: null,
        }
    },
    computed: {
    },
}
</script>