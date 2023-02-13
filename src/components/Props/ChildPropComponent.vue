<template>
    <h1>Child Component</h1>
    <button v-on:click="getUser(userName)">Send User Name</button>
</template>

<script>
export default {
    name: 'ChildPropComponent',
    data()
    {
        return {
            userName:'Abdullah'
        }
    },
    props: {
        getUser: Function
    }
}
</script>