<template>
    <h1>CSS Binding</h1>
    <!-- <h2 :class="{green:colorfull, err:true, otherOne:true}" class="otherClass">Main CSS Component</h2> -->
    <h2 :class="applyStyle" class="otherClass">Main CSS Component</h2>
    <button v-on:click="colorfull=!colorfull">Apply Style</button>
</template>

<script>
    export default {
        name: 'CSSBinding',
        data()
        {
            return {
                colorfull: false
            }
        },
        computed:{
            applyStyle()
            {
                return {                    
                    green: this.colorfull, 
                    err: true, 
                    otherOne: true
                }
            }
        }

    }
</script>

<style scoped>
h1 {
    color: orange;
}

.green {
    background-color: green;
    width: 250px;
    padding: 10px;
}
.err{
    color: red;
}

.otherOne {
    font-size: 50px;
}

</style>