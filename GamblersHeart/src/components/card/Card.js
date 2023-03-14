export class Card {
    constructor(value) {
        this.value = value
        this.images = []
        this.SUIT_TOTAL = 13
        this.suits = {
            0: 'Spades',
            1: 'Hearts',
            2: 'Clubs',
            3: 'Diamonds'
        }
        this.getImage = function() {
            return this.images[this.value]
        }
        this.convertValueToFace = function(value) {
            switch(value) {
                case 0:
                    return 'A'
                case 10:
                    return 'J'
                case 11:
                    return 'Q'
                case 12:
                    return 'K'
                default:
                    return value
            }
        }
        this.getFaceValue = function() {
            let suitValue = Math.floor(this.value / this.SUIT_TOTAL)
            let faceValue = this.value % this.SUIT_TOTAL
            console.log(this.value + " % " + this.SUIT_TOTAL + " = " + faceValue)
            return {
                suit: this.suits[suitValue],
                face: this.convertValueToFace(faceValue)
            }
        }
    }
}