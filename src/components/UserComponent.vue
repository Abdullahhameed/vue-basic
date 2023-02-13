<template>
    <div class="user">
        <h4>{{ data.name }}</h4>
        <h4>{{ data.email }}</h4>
        <button v-on:click="nameAlert(data.name)">Alert</button>
    </div>
</template>

<script>
    export default {
        name: 'UserComponent',
        props: {
            data: Object,
            nameAlert: Function
        }
    }
</script>

<style>
.user {
    background-color: skyblue;
    padding: 10px;
    border-bottom: 1px solid;
    margin-bottom: 20px;
}
</style>