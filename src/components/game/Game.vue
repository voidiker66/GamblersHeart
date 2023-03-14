<template>
    <main v-if="!loading">
        <div class="w-full flex justify-center">
            <div class="max-w-screen-lg h-screen bg-grey-50 content-center">
                <button @click="startGame" v-if="!gameActive">Start Game</button>
            </div>
        </div>
        <CardDisplay v-if="gameActive && currentPlayer"
            :player="currentPlayer"
        ></CardDisplay>
    </main>
  </template>
  
  <script>
  import { Player } from '@/components/player/Player'
  import { DECK } from '@/components/card/Deck'
  import CardDisplay from '@/components/card/CardDisplay.vue'
  export default {
    props: {
        players: null
    },
    data() {
        return {
            loading: true,
            status: null,
            roundPlayers: null,
            currentPlayer: null,
            statusList: {
                inactive: 'inactive',
                active: 'active',
                win_screen: 'win_screen'
            },
            players: null
        }
    },
    computed: {
        deck() {
            return DECK
        },
        gameActive() {
           return this.status == this.statusList.active || this.status == this.statusList.win_screen
        }
    },
    methods: {
        initPlayers() {
            this.players ={
                0: new Player(0, 'Player One'),
                1: new Player(1, 'Player Two'),
                2: new Player(2, 'Player Three'),
                3: new Player(3, 'Player Four')
            }
        },
        startGame() {
            console.log("starting game...")
            this.$emit('game-start')
            this.setStatus(this.statusList.active)
            this.dealCards()
            this.determineOrder()
            this.loading = true

            let self = this
            this.$nextTick(() => {
                self.loading = false
            })
        },
        dealCards() {
            let deck = this.deck
            deck.shuffle()
            this.roundPlayers = deck.deal(this.players)
        },
        determineOrder() {
            this.currentPlayer = this.players[0]
        },
        setStatus(status) {
            this.status = status
        }
    },
    components: {
        CardDisplay
    },
    created() {
        this.setStatus(this.statusList.inactive)
        this.initPlayers()
        let self = this
        this.$nextTick(() => {
            self.loading = false
        })
    },
    mounted() {
    }
  }
  </script>