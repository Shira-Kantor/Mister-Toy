<template>
    <section v-if="toy" class="toy-edit">
        <!-- <h4>hello from edit</h4> -->
        <form @submit.prevent="saveToy" class="flex space-between align-center">
            <input class="input" v-model="toy.name" type="text">
            <input class="input" v-model="toy.price" type="number">

            <!-- <input class="input" v-model="toy.inStock" type="checkbox" > -->
            <button class="btn">Save</button>
        </form>
        <router-link to="/toy">Back</router-link>
    </section>
</template>

<script>
import { toyService } from '../services/toy.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'

export default {
    data() {
        return {
            toy: null,
        }
    },
    async created() {
    const { toyId } = this.$route.params
    // console.log('toyId edit',toyId)
    if (toyId) {
        try {
            const toy = await toyService.getById(toyId)
            console.log('from edit', toy);
            this.toy = toy
        } catch (err) {
            console.error(err)
        }
    } else {
        this.toy = toyService.getEmptyToy()
    }
},
    methods: {
        async saveToy() {
    try {
        const toy = await this.$store.dispatch({ type: 'saveToy', toy: this.toy })
        showSuccessMsg('Added/Updated successfully')
        this.$router.push('/toy')
    } catch (err) {
        showErrorMsg("Couldn't add/update toy")
    }
},
    },
}
</script>