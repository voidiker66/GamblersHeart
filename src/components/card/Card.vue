<template>
    <div class="max-w-xs rounded overflow-hidden shadow-lg bg-gray-50">
        <span class="w-4 p-2">{{ faceValue }}</span>
        <div class="px-6 pt-6">
            <img class="w-full border-l-2 border-r-2 border-t-2 border-b" :src="imageLink" :alt="card.value">
        </div>
        <div class="px-6 py-4 border-t">
            <div class="font-bold text-xl mb-2 border p-2">
                <PlayerCard
                    :owner="owner"
                ></PlayerCard>
            </div>
        </div>
    </div>
</template>
<script>
import Base from '@/components/base/Base.vue'
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
        PlayerCard
    }
}
</script>
