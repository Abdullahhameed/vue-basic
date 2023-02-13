<template>
    <MultiSlotNameChild> 
        <template v-slot:header>
            <h3>Peter</h3>
        </template>
        <template v-slot:main>
            <p>A VUE js Product</p>
        </template>
        <template v-slot:footer>
            <button>Buy Now</button>
        </template>
    </MultiSlotNameChild>
</template>

<script>
import MultiSlotNameChild from './MultiSlotNameChild.vue';
    export default {
        name: 'MultiSlotName',
        component: {
            MultiSlotNameChild
        }
    }
</script>