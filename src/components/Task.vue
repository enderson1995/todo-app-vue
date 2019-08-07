<template>
    <div>
        <h1 class="text-red-400">Task IS : {{text}}</h1>
        <button @click="incrementValue" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            boton 
        </button>
        <p>{{counter}}</p>
        <input v-model="message" placeholder="new task" >
        <p>Message is: {{ message }}</p>
    </div>
</template>

<script>

export default {
       props: {

    },

    data () {
        return {
            counter:0,
            text: 'hola',
            message: ''
        }       
    },

    mounted () {

    },

    methods: {
        incrementValue () {
            this.text=this.message,
            this.$emit('message')
        } 
    }   
}
</script>