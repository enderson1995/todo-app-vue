<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-200">Todo App </h1>

        <todo-card class="mx-auto mt-4 h-16 w-full max-w-lg">
            Todo List
        </todo-card>
       
        <todo-card class="mx-auto mt-16 w-full max-w-lg" >
            Create/Edit Task 
            <todo-task class="mx-auto mt-16  w-full max-w-lg" ></todo-task>       
        </todo-card>
        
        
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