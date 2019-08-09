<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <h1 class="font-hairline text-6xl text-center text-gray-200">Todo App </h1>

        <todo-card class="mx-auto mt-16 w-full max-w-lg">
           
            <todo-tasksList :tasks='tasks' @eraser='eraser'>
          
        </todo-tasksList>           
        </todo-card>
       <!-- otro componente -->
        <todo-card class="mx-auto mt-16 w-full max-w-lg" >
            Create/Edit Task 
        <todo-task class="mx-auto mt-16  w-full max-w-lg" @messages='recive' ></todo-task>       
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
                this.mess=message; 
                this.counter++;
                this.tasks.push({
                    id:this.counter,
                    title:message,
                    done:false,
                    editing:false
                })           
            },
            eraser(task){
                this.tasks=task
            },
            
             
    }
}
</script>
