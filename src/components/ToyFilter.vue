<template>
    <section class="toy-filter">
        <input v-model="filterBy.name" @input="setFilter" type="text"
            placeholder="Search toy..">
            In stock:<input type="checkbox" v-model="filterBy.inStock" @change="setFilter">
    </section>
</template>



<script>
export default {
    emits: ['filter'],
    data() {
        return {
                filterBy: {
                    name: '',
                    inStock: '',
            }
        }
    },
    methods: {
       setFilter(){
        // console.log('hiiii',this.filterBy);
        this.$emit('filter',this.filterBy)
        
       }
    }
}
</script>