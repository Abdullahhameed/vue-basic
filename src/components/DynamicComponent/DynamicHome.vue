<template>
    <h1>Dynamic Component</h1>
    <button @click="tab='Java'">Java</button>
    <button @click="tab='Php'">Php</button>
    <button @click="tab='Node'">Node</button>
    <!-- <Node />
    <Php />
    <Java /> -->
    <component :is="tab" />
</template>

<script>
import Php from './Php.vue';
import Node from './Node.vue';
import Java from './Java.vue';

    export default {
        name: 'DynamicComponent',
        components:{
            Php,
            Node,
            Java
        },
        data()
        {
            return {
                tab: 'Java'
            }
        }
    }
</script>