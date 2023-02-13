<template>
    <h1>This is Child Component</h1>
    <p>{{ name }}</p>
    <p>{{ user }}</p>
    <button v-on:click="getData()">Call Parent</button>
</template>

<script>
    export default {
        name : 'ChildComponent',
        props : {
            name : String,
            user: Object,
            getData: Function
        }
    }
</script>