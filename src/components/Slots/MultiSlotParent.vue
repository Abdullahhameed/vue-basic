<template>
    <h1>Multi Slot in VUE</h1>
    <MutliSlotChild />
</template>

<script>
import MutliSlotChild from './MutliSlotChild.vue';
    export default {
        name: 'MultiSlotParent',
        component: {
            MutliSlotChild,
        }
    }
</script>