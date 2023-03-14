<template>
    <div class="container m-auto my-8" :class="cardWidth">
        <div v-for="card in player.hand">
            <Card
                :card="card"
                :owner="player"
            ></Card>
        </div>
    </div>
</template>

<script>
import Base from '@/components/base/Base.vue'
import Card from '@/components/card/Card.vue'
export default {
    extends: Base,
    props: {
        player: null,
    },
    data() {
    },
    watch: {

    },
    methods: {

    },
    computed: {
        cardWidth() {
            return 'grid gap-4 grid-cols-' + 6
        }
    },
    created() {
        
    },
    mounted() {

    },
    beforeDestroy() {

    },
    components: {
        Card
    }
}
</script>
