<template>
    <div id="app" class="bg-gray-300 h-scren">
        <TodoList/>
    </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from './components/TodoList.vue'

export default {
    name: 'app',
    components: {
        TodoList
    }
}
</script>