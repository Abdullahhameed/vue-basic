<template>
    <h1>Slot Parent Component</h1>
    <SlotChild>
        <h3>This is slot data.</h3>
        <a href="#">This is href slot data.</a>
    </SlotChild>
    <SlotChild></SlotChild>
</template>

<script>
import SlotChild from './SlotChild.vue';
    export default {
        name: 'SlotParent',
        component: {
            SlotChild
        }
    }
</script>