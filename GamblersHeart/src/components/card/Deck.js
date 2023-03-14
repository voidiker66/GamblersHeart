import { Card } from '@/components/card/Card'

class Deck {
    constructor() {
        this.CARD_TOTAL = 52
        // Array of numbers from 0-51
        this.cards = Array.from(Array(52).keys())
        // Shuffle the cards (increased recursion leads to increased randomness)
        this.shuffle = function(recursion=7) {
            this.cards.sort(() => Math.random() - 0.5);
            return recursion > 0 ? this.shuffle(recursion-1) : this.cards
        }
        this.deal = function(players) {
            let numCards = Math.floor(this.CARD_TOTAL / Object.keys(players).length)
            let start = 0
            let self = this
            Object.keys(players).forEach(function(id) {
                let player = players[id]
                let hand = self.cards.slice(start, start + numCards)
                hand = hand.map(function(value) {
                    return new Card(value)
                })
                player.setHand(hand.sort(function(a, b) {
                    return a.value > b.value
                }))
                start += numCards
            })
            return players
        }
    }
}

export const DECK = new Deck()