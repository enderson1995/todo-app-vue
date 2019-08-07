<template>
    <div id="app" class="bg-gray-300 h-screen">
        <TodoList/>
    </div>

</template>

<script>
import TodoList from './components/TodoList.vue'

export default {
    name: 'app',
    components: {
        TodoList
    },
    methods: {
    consoleClick() {
      console.log('Button clicked')
    }
  }
}
</script>