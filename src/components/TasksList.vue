<template>
<div>
       
    <div v-for="tasktest in tasks" :key="tasktest.id" >
                <div class="container mx-auto px-4 py-0 flex mb-4">
                <!-- mostrar data -->
                <input  type="checkbox" v-model="checked" @click="tasktest.done=checked" class="mr-2 inline-block form-checkbox text-purple-600 form-checkbox h-6 w-6">
                <p class="block w-3/5" v-show="!tasktest.editing"> {{tasktest.title}}  {{checked}}</p>
                <input class="block" v-model="tasktest.title" v-show="tasktest.editing" @keydown.enter="tasktest.editing=false">
               
                <!-- boton de borrar -->
                <button @click="borrar(tasktest.id)" class="block w-1/5 bg-red-700 hover:bg-red-400 text-white font-bold rounded">
                     <i class="fas fa-trash-alt"></i>
                </button>
               
                <!-- boton de editar -->
                <button @click="tasktest.editing=true" class="block w-1/5 ml-2 bg-green-700 hover:bg-green-400 text-white font-bold py-2 px-2 rounded">
                    <i class="fas fa-pen-square"></i>
                </button>
            </div>

    
    </div>
    </div>
</template>

<script>
export default {
    props: {
        tasks:{
            type: Object,
            required: true
        }
    },

    data () {
        return {
            tasktest:''
        };
    },

    mounted () {

    },

    methods: {
        borrar(idRemove){
                this.tasks=this.tasks.filter(todo => {
                    return todo.id !== idRemove
                }), 
                this.$emit('eraser',this.$props.tasks)  
            },
       
    }
}
</script>