<template>
    <h1>HTML Binding</h1>
    <h3>{{ text }}</h3>
    <div v-html="tag"></div>
    <div v-html="tag2"></div>
</template>

<script>
    export default {
        name: 'HTMLBinding',
        data()
        {
            return {
                text: 'This is Text',
                tag: '<h3>This is tag One</h3>',
                tag2: '<h3>This is tag Two</h3>',
            }
        }
    }
</script>