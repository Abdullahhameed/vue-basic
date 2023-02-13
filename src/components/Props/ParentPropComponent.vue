<template>
    <h1>Send Data Child to Parent Component</h1>
    <h3>{{ childUser }}</h3>
    <ChildPropComponent :getUser="getUserName" />
</template>

<script>
import ChildPropComponent from './ChildPropComponent.vue';
export default {
    name: 'ParentPropComponent',
    components:{
        ChildPropComponent,
    },
    data()
    {
        return {
            childUser: ''
        }
    },
    methods: {
        getUserName(name) {
            this.childUser = name
        }
    }

}
</script>

<style scoped>
h1 {
    color: blue;
}
</style>