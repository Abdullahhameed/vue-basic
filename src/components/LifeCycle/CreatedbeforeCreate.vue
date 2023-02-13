<template>
    <h1>Created and beforeCreate Life Cycle -> {{ name }}</h1>
</template>

<script>
    export default {
        name : 'CreatedbeforeCreate',
        data()
        {
            console.log('Data calling');
            return {
                name : 'Data'
            }
        },
        beforeCreate()
        {
            this.name = 'Data before create';
            console.log('before create calling');
        },
        created()
        {
            this.name = 'Data created';
            console.log("created");
        }
    }
</script>