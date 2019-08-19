let gameProg = []

function play(clickedId) {
    let player = document.getElementById('player')
    let clickedElement = document.getElementById(clickedId)

    if (player.innerText === 'X') {
        player.innerText = 'O'
        clickedElement.innerText = 'X'
        gameProg[clickedId] = 'X'
    } else {
        player.innerText = 'X'
        clickedElement.innerText = 'O'
        gameProg[clickedId] = 'O'
    }

    let topLeft = gameProg[0]
    let topMiddle = gameProg[1]
    let topRight = gameProg[2]
    let middleLeft = gameProg[3]
    let middleMiddle = gameProg[4]
    let middleRight = gameProg[5]
    let bottomLeft = gameProg[6]
    let bottomMiddle = gameProg[7]
    let bottomRight = gameProg[8]


    if (topLeft !== undefined && topLeft === topMiddle && topLeft === topRight) {
        window.alert(`${topLeft} is the winner!`)
    } else if (middleLeft !== undefined && middleLeft === middleMiddle && middleLeft === middleRight) {
        window.alert(`${middleLeft} is the winner!`)
    } else if (bottomLeft !== undefined && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
        window.alert(`${bottomLeft} is the winner!`)
    } else if (topLeft !== undefined && topLeft === middleLeft && topLeft === bottomLeft) {
        window.alert(`${topLeft} is the winner!`)
    } else if (topMiddle !== undefined && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
        window.alert(`${topMiddle} is the winner!`)
    } else if (topRight !== undefined && topRight === middleRight && topRight === bottomRight) {
        window.alert(`${topRight} is the winner!`)
    } else if (topLeft !== undefined && topLeft === middleMiddle && topLeft === bottomRight) {
        window.alert(`${topLeft} is the winner!`)
    } else if (topRight !== undefined && topRight === middleMiddle && topRight === bottomLeft) {
        window.alert(`${topRight} is the winner!`)
    }

    let boardFull = true

    for (let i = 0; i <= 8; i++) {
        // console.log(gameProg[i])
        if (gameProg[i] === undefined) {
            boardFull = false
        }
    }
    // console.log(boardFull)
    if (boardFull) {
        window.alert('Stale mate!')
    }
}