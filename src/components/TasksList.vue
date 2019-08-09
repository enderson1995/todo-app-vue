<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
    <h1 class="text-red-900">Tasks List</h1>
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