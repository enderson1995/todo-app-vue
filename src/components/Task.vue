<template>
    <div>
        <h1 class="text-red-400">Task IS : {{text}}</h1>
            <button @click="incrementValue" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Crear 
            </button>
        <p>{{counter}}</p>
        <input v-model="message" placeholder="new task" class="bg-gray-500 ">
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
            message: '',
            task:[{
                id:0,
                description:'',
                done:false
            }],
        }   

    },

    mounted () {

    },

    methods: {
        incrementValue () {
            this.text=this.message,
            this.counter++,
            this.$emit('messages',this.message),
            this.task.push({
                id:this.counter,
                description:this.message,
                done:false
            }),
        
            this.message=null
        } 
    }   
}
</script>