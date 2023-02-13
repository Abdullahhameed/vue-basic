<template>
    <h1>Reuse Component</h1>
    <ul>
        <li v-for="item in users" :key="item.name">
            <UserComponent :data="item" :nameAlert="nameAlert" />
            <!-- {{ item.name }} -->
        </li>
    </ul>
</template>

<script>
import UserComponent from './UserComponent.vue';

    export default {
        name: 'ReuseComponent',
        components: {
            UserComponent
        },
        methods: {
            nameAlert(name)
            {
                alert(name)
            }
        },
        data()
        {
            return {
                users: [
                    {
                        name: 'Ali',
                        email: 'ali@test.com'
                    },
                    {
                        name: 'Aslam',
                        email: 'aslam@test.com'
                    },
                    {
                        name: 'Arjun',
                        email: 'arjun@test.com'
                    },
                    {
                        name: 'Sam',
                        email: 'sam@test.com'
                    },
                    {
                        name: 'John',
                        email: 'john@test.com'
                    },
                ]
            }
        }
    }
</script>