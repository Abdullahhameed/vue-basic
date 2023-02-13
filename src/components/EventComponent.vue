<template>
    <h1>Event Component Javascript</h1>
    <button v-on:click="getData('Butttom 1 clicked')">Click Me</button>
    <button v-on:dblclick="getData('Butttom double clicked')">Click Me</button>
    <h3 v-on:mouseover="getConsole()">Mouse Over Event</h3>
    <button v-on:click="counter()">Counter :></button> {{ count }}
</template>

<script>
    export default {
        name: 'EventHandler',
        data() {
            return {
                count: 0
            }
        },
        methods: {
            getData(data)
            {
                alert(data);
            },
            getConsole() 
            {
                console.warn('function is calling');
            },
            counter() 
            {
                this.count = this.count + 1;
            }
        },
    }
</script>