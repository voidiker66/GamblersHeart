<template>
  <main>
    <Game
        :players="players"
    ></Game>
    <ScoreBoard>

    </ScoreBoard>
  </main>
</template>

<script>
import Base from '@/components/base/Base.vue'
import Game from '@/components/game/Game.vue'
export default {
    extends: Base,
    data() {
        return {
            players: null
        }
    },
    computed: {
    },
    methods: {
    },
    components: {
        Game
    },
    created() {
    },
    mounted() {

    }
}
</script>