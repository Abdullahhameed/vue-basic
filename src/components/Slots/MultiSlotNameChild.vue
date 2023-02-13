<template>
    <header>
        <slot name="header"></slot>
    </header>
    <content>
        <slot name="main"></slot>
    </content>
    <footer>
        <slot name="footer"></slot>
    </footer>
</template>

<script>
    export default {
        name: 'MultiSlotChildName'
    }
</script>