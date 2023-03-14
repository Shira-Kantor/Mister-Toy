<template>
    <h3>filter</h3>
    <section class="toy-filter">
        <input class="input" v-model="filter.filterBy.name" @input="$emit('filter', filter)" type="text"
            placeholder="Search toy..">
            In stock:<input type="checkbox"  v-model="filter.filterBy.isStock" @change="$emit('filter', filter)">
    </section>
</template>



<script>
export default {
    data() {
        return {
            filter: {
                filterBy: {
                    name: '',
                    isStock: '',
                },
                sortBy: {
                    by: '',
                    desc: 1,
                }
            }
        }
    },
    methods: {
       
    }
}
</script>