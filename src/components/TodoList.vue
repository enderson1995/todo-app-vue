<template>
    <div class="container mx-auto px-4 py-20 flex flex-col flex-wrap">
        <div>
        <h1 class="font-hairline text-5xl text-center text-gray-200">Hello! :)</h1>
    </div>
    <!-- otro componente -->
       <p class="font-hairline text-center text-2xl text-gray-200">Create a new task </p>
        <todo-task class="mx-auto mt-6 w-f100 max-w-lg bg-white rounded  " @messages='recive' ></todo-task>       

         
        <h1 class="font-hairline mt-6 text-5xl text-center text-gray-200">To do List </h1>
    
        <todo-card class="mx-auto mt-2 w-full max-w-lg text-gray-600">
           
            <todo-tasksList :tasks='tasks' @eraser='eraser'>
             </todo-tasksList>           
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
