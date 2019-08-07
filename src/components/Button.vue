<template>
    <div id="action">
        <button @click="incrementValue" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            boton
        </button>
        <p>{{counter}}</p>
    </div>
</template>

<script>
export default {

    props: {

    },

    data () {
        return {
            counter:0
        }       
    },

    mounted () {

    },

    methods: {
        incrementValue () {
             this.counter++
        }
    }   
}
</script>