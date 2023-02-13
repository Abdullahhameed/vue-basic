<template>
    <h1>Two Way Binding</h1>
    <input type="text" v-model="data" />
    {{ data }}
</template>

<script>
export default {
    name: 'TwoWayBinding',
    data()
    {
        return {
            data: 'Hello'
        }
    }
}
</script>