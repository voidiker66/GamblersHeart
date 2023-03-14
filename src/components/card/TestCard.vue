<template>
        <div class="min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0 m-6 z-20">
        <!--
            Modal panel, show/hide based on modal state.

            Entering: "ease-out duration-300"
            From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            To: "opacity-100 translate-y-0 sm:scale-100"
            Leaving: "ease-in duration-200"
            From: "opacity-100 translate-y-0 sm:scale-100"
            To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        -->
        <div class="transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xs">
            <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div class="sm:flex sm:items-start">
                <div class="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <span class="w-4 p-2">{{ faceValue }}</span>
                    <img class="w-full border-l-2 border-r-2 border-t-2 border-b" :src="imageLink" :alt="card.value">
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            <PlayerCard
                                :owner="owner"
                            ></PlayerCard>
                        </p>
                    </div>
                </div>
            </div>
            </div>
            <CardChooseAlert></CardChooseAlert>
        </div>
    </div>
</template>

<script>
import Base from '@/components/base/Base.vue'
import CardChooseAlert from '@/components/modals/CardChooseAlert.vue'
import PlayerCard from '@/components/player/PlayerCard.vue'
export default {
    extends: Base,
    props: {
        card: null,
        owner: null
    },
    data() {
        return {
            images: null
        }
    },
    watch: {

    },
    methods: {
        getImages() {
            return [
                // Todo
            ];
        }
    },
    computed: {
        imageLink() {
            return 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Poker-sm-221-Ah.png'
            // return this.cardValue ? this.images[this.cardValue] : this.defaultImage
        },
        background() {
            return this.owner ? this.playerColor[this.owner.id] : this.defaultPlayerColor
        },
        faceValue() {
            let faceValue = this.card.getFaceValue()
            return faceValue.suit + " " + faceValue.face
        }
    },
    created() {
        this.images = this.getImages()
    },
    mounted() {
    },
    beforeDestroy() {

    },
    components: {
        PlayerCard,
        CardChooseAlert
    }
}
</script>
