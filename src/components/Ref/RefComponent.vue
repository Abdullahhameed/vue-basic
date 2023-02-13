<template>
    <h1>Ref Component in Vue</h1>
    <input type="text" ref="input" />
    <button v-on:click="getData">Click Me</button>
</template>

<script>
    export default {
        name: 'RefComponent',
        methods: {
            getData()
            {
                this.$refs.input.focus()
                let value = this.$refs.input.value;
                console.log(value);
                this.$refs.input.style.color = "red";
            }
        }
    }
</script>

<style scoped>
h1 {
    color: brown;
}
</style>