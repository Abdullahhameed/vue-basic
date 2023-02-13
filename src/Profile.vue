<template>
    <h1>Profile Component</h1>
    <p>Name is {{ profileName }}</p>
</template>
<script>
import { useRoute } from 'vue-router';
export default {
    name: 'ProfileComponent',
    data()
    {
        return {
            profileName: ''
        }
    },
    mounted()
    {
        const route = useRoute();
        this.profileName = route.params.name
    }
}
</script>