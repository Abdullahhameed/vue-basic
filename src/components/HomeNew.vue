<template>
    <h1>Home Component Here</h1>
    <h2>Email :: {{ email }}</h2>
    <h3>Phone :: {{ phone }}</h3>
    <h4>Phone Check :: {{ phone==123 }}</h4>
    <h5>Name :: {{ getName('Vue') }}</h5>
    <h6>Data :: {{ getData() }}</h6>
</template>

<script>
    export default {
        name: 'HomeNew',
        data()
        {
            return {
                email: 'lahore@pakistan.com',
                phone : 123456789,
                getName:function(a) {
                    return a;
                },
            }
        },
        methods: {
            getData() {
                return {
                    firstName: "Ali",
                    cnic: "123-432-4555-1",
                    email: this.email,
                }
            }
        }
    }
</script>

<style scoped>
h1{
    color: green;
}
</style>