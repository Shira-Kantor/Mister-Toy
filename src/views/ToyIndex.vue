
<template>
    <h1>
        Toy Store!
    </h1>
    <ToyFilter @filter="setFilter" /> ||
    <!-- @filteredTxt="debounceHandler" -->

    <!-- {{ msg }} -->
    <!-- <pre>{{ toys }}</pre>  -->
    <RouterLink to="/toy/edit"><button v-if="user.isAdmin" class="btn btn-add">Add Toy</button> </RouterLink>
    <ToyList :toys="toys" @removed="removeToy" />
</template>

<script>
import ToyList from '../components/ToyList.vue'
import ToyFilter from '../components/ToyFilter.vue'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service.js'
export default {

    name: 'ToyIndex',
    data() {
        return {
            // user: null
            // filterBy: { name: '', inStock: '', labels: [] }
        }
    },
    created() {
        // this.debounceHandler = _.debounce(this.setFilterByName, 500)
    },
    computed: {
        msg() {
            // console.log(this.$store.getters.getMsg);
            return this.$store.getters.getMsg
        },
        toys() {
            return this.$store.getters.toysToDisplay
        },
        user() {
            return this.$store.getters.user
        }
    },
    methods: {
        async removeToy(toyId) {
    try {
        await this.$store.dispatch({ type: 'removeToy', toyId })
        showSuccessMsg('Toy removed')
    } catch (err) {
        showErrorMsg('Cannot remove toy')
    }
},
        setFilter(filter) {
            // const filterBy = { ...this.filterBy }
            // console.log('filter in index', filter)
            this.$store.dispatch({ type: 'loadToys', filter })

            // If filtering in backend/service
            // this.isLoading = true
            // this.$store
            //   .dispatch({ type: 'loadToys', filterBy })
            //   .then(() => (this.isLoading = false))
        },

    },
    components: {
        ToyList,
        ToyFilter
    }
}
</script>

<style></style>