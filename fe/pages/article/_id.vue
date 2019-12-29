<template>
    <div class="kkb-container">
        <h1>{{ id }}</h1>
    </div>
</template>
<script>
export default {
    data() {
        return {
            id: ''
        }
    },
    mounted() {
        let { id } = this.$route.params
        this.id = id
    }
}
</script>