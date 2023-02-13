<template>
    <h1>Watcher Vue</h1>
    <p>{{ count }}</p>
    <button v-on:click="count=count+1"> + </button>
    <button v-on:click="count=count-1"> - </button>
</template>

<script>
    export default {
        name: 'WatchComponent',
        data()
        {
            return {
                count: 0
            }
        },
        watch: {
            count(val, prev)
            {
                if(val > 5 && val > prev) {
                    this.count = 0;
                }
            }
        }
    }
</script>