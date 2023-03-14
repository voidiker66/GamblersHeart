<template>
    <div class="container m-auto my-8" :class="cardWidth" v-if="display" @card-select-alert="hide">
        <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <!--
            Background backdrop, show/hide based on modal state.

            Entering: "ease-out duration-300"
            From: "opacity-0"
            To: "opacity-100"
            Leaving: "ease-in duration-200"
            From: "opacity-100"
            To: "opacity-0"
        -->
            <div class="fixed inset-0 z-10 overflow-y-auto"></div>
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
            <div class="grid grid-cols-6 min-w-max">
                    <Card
                        v-for="card in player.hand"
                        :card="card"
                        :owner="player"
                    ></Card>
            </div>
        </div>
    </div>
</template>

<script>
import Base from '@/components/base/Base.vue'
import Card from '@/components/card/TestCard.vue'
export default {
    extends: Base,
    props: {
        player: null,
    },
    data() {
        return {
            display: false
        }
    },
    watch: {

    },
    methods: {
        hide() {
            console.log("HERE")
            this.display = false
        },
        show() {
            this.display = true
        }
    },
    computed: {
        cardWidth() {
            return 'grid gap-4 grid-cols-' + 6
        }
    },
    created() {
    },
    mounted() {
        this.show()
    },
    beforeDestroy() {

    },
    components: {
        Card
    }
}
</script>
