<template>
    <h1>If Else Condition</h1>
    <!-- <h3 v-if="show">True Condition</h3>
    <h3 v-else>Else Condition</h3> -->
    <h3 v-if="show">Show Condition</h3>
    <h3 v-else>Hide Condition</h3>
    <button v-on:click="show=!show">Show</button>
</template>

<script>
    export default {
        name: 'IfElse',
        data()
        {
            return {
                show : true
            }
        }
    }
</script>