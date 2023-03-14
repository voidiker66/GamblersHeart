<template>
    
</template>

<script>
export default {
    data() {
        return {
            playerColor: [],
            defaultPlayerColor: 'orange'
        }
    },
    watch: {

    },
    methods: {
        getPlayerColors() {
            return {
                0: 'red',
                1: 'blue',
                2: 'green',
                3: 'yellow'
            };
        }
    },
    computed: {
    },
    created() {
        this.playerColor = this.getPlayerColors()
    },
    mounted() {
        
    },
    beforeDestroy() {

    },
    components: {

    }
}
</script>
