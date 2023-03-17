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
    created() {
        const { toyId } = this.$route.params
        console.log('toyId edit',toyId)
        if (toyId) {
            toyService.getById(toyId).then((toy) => {
                console.log('from edit', toy);
                this.toy = toy
            })
        } else {
            this.toy = toyService.getEmptyToy()
        }
    },

    methods: {
        saveToy() {
            this.$store
                .dispatch({ type: 'saveToy', toy: this.toy })
                .then(toy => {
                    showSuccessMsg('Added/Updated succssefully')
                    this.$router.push('/toy')
                })
                .catch(err => {
                    showErrorMsg("Couldn't add/update toy")
                })
        },
    },
}
</script>