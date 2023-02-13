<template>
    <h1>Simple Form</h1>
    <p>{{ form }}</p>
    <ul>
        <li v-for="item in error" v-bind:key="item">{{ item }} not valid</li>
    </ul>
    <form>
        <label>Email :</label>
        <input type="text" placeholder="Enter Email" v-model="form.email" />
        <!-- <input type="text" placeholder="Enter Email" v-model.lazy="form.email" /> -->
        <br />

        <label>Password :</label>
        <input type="password" placeholder="Enter Password" v-model="form.password" />
        <br />
        <select v-model="form.country">
            <option>Pakistan</option>
            <option>China</option>
            <option>USA</option>
        </select>
        <br />
        <h3>Technology</h3>
        <label>Java :</label>
        <input type="checkbox" value="java" v-model="form.technology" />
        <label>PHP :</label>
        <input type="checkbox" value="php" v-model="form.technology" />
        <br />
        <h3>Gender</h3>
        <label>Male :</label>
        <input type="radio" name="gender" value="male" v-model="form.gender" />
        <label>Female :</label>
        <input type="radio" name="gender" value="female" v-model="form.gender" />
        <br />
        <button type="button" v-on:click="login()">Login</button>
    </form>
    
</template>

<script>
    export default {
        name: 'SimpleForm',
        data()
        {
            return {
                form: {
                    email: '',
                    password: '',
                    country: '',
                    technology: [],
                    gender: ''
                },
                error:[],
            }
        },
        methods: {
            login()
            {
                this.error = []
                for(const item in this.form) {
                    if(this.form[item] === "" || this.form[item].length === 0) {
                        this.error.push(item)
                    }
                }

                if(this.error.length === 0){
                    alert("Form submit Successfully")
                }
                console.log("Login Data", this.form, this.error)
            }
        }
    }
</script>
<style scoped>
h1 {
    color: coral
}
</style>