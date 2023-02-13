<template>
    <h1>This is Parent Component</h1>
    <ChildComponent name="Abdullah" :user="user" :getData="getFun" />
</template>

<script>
import ChildComponent from './ChildComponent.vue';

    export default {
        name : 'ParentComponent',
        components:
        {
            ChildComponent
        },
        data()
        {
            return {
                user : { name: 'Ali', email: 'ali@gmail.com' }
            }
        },
        methods:
        {
            getFun()
            {
                console.log('Parent Function Calling');
            }
        }
    }
</script>