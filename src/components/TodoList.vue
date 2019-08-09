<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-200">Todo App </h1>

        <todo-card class="mx-auto mt-4 h-16 w-full max-w-lg">
            <div v-for="(tasktest, index) in tasks" :key="tasktest.id" >
                <!-- mostrar data -->
                <input type="checkbox" v-model="checked" @click="tasktest.done=checked">
                <p v-show="!tasktest.editing">{{index +1}}-) {{tasktest.title}}  {{checked}}</p>
                <input v-model="tasktest.title" v-show="tasktest.editing" @keydown.enter="tasktest.editing=false">
                
                <!-- boton de borrar -->
                <button @click="borrar(tasktest.id)" class="bg-red-700 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
                    X
                </button>
                <!-- boton de editar -->
                <button @click="tasktest.editing=true" class="mx-auto mt-2 bg-green-700 hover:bg-green-200 text-white font-bold py-2 px-4 rounded">
                    edit
                </button>
            </div>
           
        </todo-card>
       <!-- otro componente -->
        <todo-card class="mx-auto mt-16 w-full max-w-lg" >
            Create/Edit Task 
            <todo-task class="mx-auto mt-16  w-full max-w-lg" @messages='recive' ></todo-task>       
        </todo-card>
        
<div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-500">Todo App Proyecto 1</h1>
    <div class="bg-gray-300">
        <todo-card class="inline-block mx-10 mt-10 h-48 w-40 max-w-lg bg-red-500">
            Critical
        </todo-card>
        <todo-card class="inline-block mx-10 mt-10 h-48 w-full max-w-lg bg-red-100">
            Tarea
        </todo-card>
        <todo-card class="inline-block mx-10 mt-10 h-48 w-auto max-w-lg bg-red-100">
            BOTONES
        </todo-card>
        <todo-card class="inline-block mx-10 mt-10 h-48 w-40 max-w-lg bg-indigo-700">
            Major
        </todo-card>
        <todo-card class="inline-block mx-10 mt-10 h-48 w-full max-w-lg bg-red-100">
            Tarea
        </todo-card>
        <todo-card class="inline-block mx-10 mt-10 h-48 w-auto max-w-lg bg-red-100">
            BOTONES
        </todo-card>
        <todo-card class="inline-block mx-10 mt-10 h-48 w-40 max-w-lg bg-yellow-400">
            Minor
        </todo-card>
        <todo-card class="inline-block mx-10 mt-10 h-48 w-full max-w-lg bg-red-100">
            Tarea
        </todo-card>
        <todo-card class="inline-block mx-10 mt-10 h-48 w-auto max-w-lg bg-red-100">
            BOTONES
        </todo-card>
    </div>
    
    <div>    
        <todo-card class="inline-block mx-32 mt-4 h-64 w-full max-w-lg ">
            Project 1
        </todo-card>
    </div>      

        
    </div>

        
    </div>






</template>

<script>


export default {
    components:{
    
    },
    props: {
        
    },

    data () {
        return { 
            checked: false,         
            tasks: [
                {
                    id: 1,
                    title: 'Example task',
                    done: false,
                    editing:false
                }                
            ],
            mess: '',
            counter:1
        };
    },

    mounted () {

    },

    methods: {
            recive(message){
                this.mess=message, 
                this.counter++  
                this.tasks.push({
                    id:this.counter,
                    title:message,
                    done:false,
                    editing:false
                })           
            },
            borrar(idRemove){
                this.tasks=this.tasks.filter(todo => {
                    return todo.id !== idRemove
                })   
            },
            editar(){
            tasktest.editing=true
            return tasktest.editing
            }   
    }
}
</script>
