let cardId = document.getElementById('cardId')
let cardStyle = document.getElementById('cardStyle')

// console.log(cardId, cardStyle)

function setCard() {
    let inputSuit = cardId.value
    let inputColor = cardStyle.value
    let card = document.getElementById(inputSuit)
    card.style.color = inputColor
    console.log(card)
}

// setCard()