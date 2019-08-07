<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-500">Todo App</h1>

        <todo-card class="mx-32 mt-4 h-64 w-full max-w-lg">
            Critical
        </todo-card>
        
         <todo-card class="mx-32 mt-4 h-64 w-full max-w-lg">
            Major
        </todo-card>
         <todo-card class="mx-32 mt-4 h-64 w-full max-w-lg">
            Minor
        </todo-card>
        <todo-card class="mx-32 mt-4 h-64 w-full max-w-lg">
            Project 1
        </todo-card>
        

        
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
