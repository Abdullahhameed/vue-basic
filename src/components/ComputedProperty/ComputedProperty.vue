<template>
    <h1>Computed Property</h1>
    {{ getResult }}
</template>

<script>
    export default {
        name: "ComputedProperty",
        data()
        {
            return {
                dollor: 100,
                rupee: 250
            }
        },
        computed: {
            getResult()
            {
                return (this.dollor * this.rupee)
            }
        }
    }
</script>