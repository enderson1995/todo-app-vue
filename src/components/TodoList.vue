<template>
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
</template>

<script>
export default {
    props: {

    },

    data () {
        return {
            tasks: [
                {
                    id: 1,
                    title: 'Example task',
                    done: false
                }
            ]
        };
    },

    mounted () {

    },

    methods: {

    }
}
</script>
