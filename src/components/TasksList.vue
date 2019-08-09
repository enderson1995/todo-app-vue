<template>
    <div class="container mx-auto px-4 py-0 flex flex-col flex-wrap">
    <h1 class="text-red-900">Tasks List</h1>
    
    <div v-for="tasktest in tasks" :key="tasktest.id" >
                <!-- mostrar data -->
            
                <input class="inline-block" type="checkbox" v-model="checked" @click="tasktest.done=checked">
                <p class="inline-block" v-show="!tasktest.editing"> {{tasktest.title}}  {{checked}}</p>
                <input class="inline-block" v-model="tasktest.title" v-show="tasktest.editing" @keydown.enter="tasktest.editing=false">
                
                <!-- boton de borrar -->
                <button @click="borrar(tasktest.id)" class="inline-block bg-red-700 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
                     <i class="fas fa-trash-alt"></i>
                </button>
               
                <!-- boton de editar -->
                <button @click="tasktest.editing=true" class="inline-block mx-auto mt-2 bg-green-700 hover:bg-green-200 text-white font-bold py-2 px-4 rounded">
                    <i class="fas fa-pen-square"></i>
                </button>
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