<template>
    <h1>Post API Component</h1>

    <input type="text" name="email" placeholder="Email" v-model="email" /><br />
    <input type="text" name="pasword" placeholder="Password" v-model="password" /><br />
    <button v-on:click="addUser()">Add</button>
</template>
<script>
import axios from 'axios';
export default {
    name: 'PostApi',
    data()
    {
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        async addUser()
        {
            console.log("ssssssss", this.email);
            let result = await axios.post("http://localhost:3000/users", {
                email: this.email,
                password:this.password,
            });
            console.log("Result::::", result);
            console.log("end");
        }
    }
}
</script>
