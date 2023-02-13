<template>
    <h1>Mounted and beforeMount Life Cycle -> {{ name }}</h1>
</template>

<script>
    export default {
        name: 'MountedbeforeMount',
        data()
        {
            return {
                name : 'Anil'
            }
        },
        beforeMount()
        {
            console.log('before mount', this.$el);
        },
        mounted()
        {
            console.log('mounted', this.$el)
        }
    }
</script>