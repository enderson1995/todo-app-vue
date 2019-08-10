<template>
    <div>
        
        <input type="text" v-model="message" placeholder="What needs to be done?" class= "ml-10 text-grey-500 max-w-lg w-auto" @keyup.enter="incrementValue">
        <button @click="incrementValue" class="bg-green-700 hover:bg-green-500 text-white font-bold ml-40 py-2 px-4 rounded ">
            Create task 
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