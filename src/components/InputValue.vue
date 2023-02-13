<template>
    <h3>Get Input Value</h3>
    <input type="text" placeholder="Enter Email" v-model="email" />
    <br />
    <br />
    <input type="text" placeholder="Enter Email" v-model="password" />
    <br />
    <br />
    <button v-on:click="getData()">Get Values</button>
</template>

<script>
    export default {
        name: 'InputValue',
        data()
        {
            return {
                email: null,
                password: null
            }
        },
        methods: {
            getData()
            {
                console.log('Data :', this.email, this.password)
            }
        }
    }

</script>