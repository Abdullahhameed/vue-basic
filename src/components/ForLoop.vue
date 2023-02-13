<template>
    <h1>For Loop in Vue</h1>
    <ul>
        <li v-for="item in technology" :key="item">
            {{ item }}
        </li>
    </ul>
    <br /> <br />
    <ul>
        <li v-for="item in user" :key="item.email">
            My name is :{{ item.name }} and my Email is: {{ item.email }}
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'ForLoop',
        data()
        {
            return {
                technology: ['PHP', 'JAVA', 'NODE', 'CSS', 'HTML'],
                user:[
                    {
                        name: 'Abdullah',
                        email: 'abdullah@gmail.com'
                    },
                    {
                        name: 'Ali',
                        email: 'ali@gmail.com'
                    },
                    {
                        name: 'Aslam',
                        email: 'aslam@gmail.com'
                    },
                ]
            }
        }
    }
</script>