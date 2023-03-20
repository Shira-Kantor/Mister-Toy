<template>
    <!-- <h3>{{ toy }}</h3> -->
    <section v-if="toy" class="toy-details">
        <p>Name: {{ toy.name }}</p>
        <p>Price: {{ toy.price }}</p>
        <p>In stock: {{ toy.inStock }}</p>

        <h1 class="review-header">Reviews</h1>
        <div v-for="review in reviews" :key="review._id" class="review-preview">
            <h4>About: {{ review.toy.name }}</h4>
            <h4>By: {{ review.user.username }}</h4>
            <p>Review: {{ review.txt }}</p>
        </div>
        <form @submit.prevent="sendReview">

            <label for="review">Add Review:</label>
            <input type="text" v-model="addReview" placeholder="Add review">
            <button>Add</button>

        </form>
        <Chat :toy="toy"></Chat>
        <!-- <pre>{{ toy }}</pre> -->
        <!-- {{ user }} -->

        <router-link to="/toy">Back</router-link>
    </section>
</template>


<script>
import { toyService } from '../services/toy.service.js'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
import Chat from './Chat.vue'

export default {
    name: 'toy-details',
    watch: {
        '$route.params': {
            async handler() {
                const { toyId } = this.$route.params;
                const toy = await toyService.getById(toyId);
                this.toy = toy;
            },
            immediate: true,
        },
    },
    data() {
        return {
            toy: null,
            addReview: ''
        }
    },
    computed: {
        createdAt() {
            const date = new Date(this.toy.createdAt)
            return new Intl.DateTimeFormat('en-GB', {
                dateStyle: 'full',
                timeStyle: 'short',
            }).format(date)
        },
        user() {
            return this.$store.getters.user
        },
        reviews() {
            return this.$store.getters.getReviews
        }
    },
    async created() {
        try {
            const user = userService.getLoggedinUser()
            if (user) {
                this.$store.commit({ type: 'login', user })
            }
            await this.loadToy()
            await this.$store.dispatch({ type: 'getReviews', filterBy: { toyId: this.toy._id } })
        } catch (err) {
            console.error(err)
        }
    },
    methods: {
        async loadToy() {
      try {
      const { toyId } = this.$route.params
      const toy = await toyService.getById(toyId)
      this.toy = toy
      } catch {
        console.log('Could Not load toy');
      }
    },
        async sendReview() {
            await this.$store.dispatch({ type: 'addReview', newReview: { txt: this.addReview, toyId: this.toy._id } })
            this.$store.dispatch({ type: 'getReviews', filterBy: { toyId: this.toy._id } })
            this.newReview = ''
        }
        // async addReview() {
        //     try {
        //         console.log('this.review', this.review)
        //         await this.$store.dispatch({ type: 'addReview', review: this.review })
        //         showSuccessMsg('Review added')
        //         // this.review = { txt: '', aboutToyId: null }
        //     } catch (err) {
        //         showErrorMsg('Cannot add review')
        //     }
        // }
    },
    components: {
    Chat,
  },
}
</script>