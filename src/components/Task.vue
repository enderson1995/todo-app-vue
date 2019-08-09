<template>
    <div>
        <input v-model="message" placeholder="new task" class="bg-gray-500 ">
        <button @click="incrementValue" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Crear 
        </button>

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
            this.$emit('messages',this.message),       
            this.message=null
        } 
    }   
}
</script>