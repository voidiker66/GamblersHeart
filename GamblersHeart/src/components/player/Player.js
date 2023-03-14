export class Player {
    constructor(id, name) {
        this.id = id
        this.name = name
        this.hand = []
        this.setHand = function(hand) {
            this.hand = hand
        }
        this.getHand = function() {
            return this.hand
        }
    }
}