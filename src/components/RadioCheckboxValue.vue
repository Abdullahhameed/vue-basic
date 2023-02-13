<template>
    <h2>Radio ans Checkbox value get</h2>
    <h3>Select Technology</h3>

    <label for="java">Java</label>
    <input type="checkbox" value="java" v-model="technology" id="java" />
    
    <label for="php">PHP</label>
    <input type="checkbox" value="php" v-model="technology" id="php" />
    
    <label for="node">Node</label>
    <input type="checkbox" value="node" v-model="technology" id="node" />

    <br /> 
    <h4>Who I am</h4>

    <label for="student">Student</label>
    <input type="radio" name="who" value="student" v-model="who" id="student" />

    <label for="developer">Developer</label>
    <input type="radio" name="who" value="developer" v-model="who" id="developer" />

    <br /> <br />
    <h4>Selected Technology :: {{ technology }}</h4>
    <h4>I am a :: {{ who }}</h4>

</template>

<script>
    export default {
        name: 'GetValue',
        data()
        {
            return {
                technology: [],
                who: null
            }
        }
    }
</script>