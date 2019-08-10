<template>
    
    <div id="app" class="bg-gray-900 h-screen">
        <TodoList/>
    </div>

</template>

<script>

import TodoList from './components/TodoList.vue'

export default {
    name: 'app',
    components: {
        TodoList
    }
}
</script>