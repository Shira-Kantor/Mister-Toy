
<template>
    <h1>
        toy index
    </h1>
    {{ msg }}
</template>

<script>
    import ToyList from '../components/ToyList.vue'
export default {
    
 name: 'ToyIndex',
    computed: {
        msg() {
            console.log(this.$store.getters.getMsg);
            return this.$store.getters.getMsg
        }
    },
}
</script>

<style></style>