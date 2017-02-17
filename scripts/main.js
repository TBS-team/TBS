const gameState = {
    startScreen: true,
    shopScreen: false,
    gameScreen: false,
    winScreen: false,
    loseScreen: false
}

function getGameState() {
    const stateArr = Object.getOwnPropertyNames(gameState);
    const activeState = stateArr.find(function(key) {
        if (gameState[key]) {
            return key
        }
    })
    return activeState
}

function changeGameState(input) {
    for (key in gameState) {
        gameState[key] = false;
        gameState[input] = true;
    }
    console.log(gameState)
}

function showScreen() {
    $('.screen').hide()
    switch(getGameState()) {
        case 'shopScreen':
            populatePrices()
            $('#shopScreen').show()
            break;
        case 'gameScreen': $('#gameScreen').show()
            break;
        case 'winScreen': $('#winScreen').show()
            break;
        case 'loseScreen': $('#loseScreen').show()
            break;
        default: $('#startScreen').show()
    }
}

function toShopScreen() {
    changeGameState('shopScreen')
    showScreen()
}

//SHOP FUNCTIONS

function whichPlayerShops() {
    if (playerOne.buyActive) {
        $('#playerNumber').html('1')
    } else if (playerTwo.buyActive) {
        $('#playerNumber').html('2')
    }
}

function populatePrices() {
    $('#soldierPrice').html(soldierUnit.price)
    $('#cavalryPrice').html(cavalryUnit.price)
    $('#archerPrice').html(archerUnit.price)
    $('#cannonPrice').html(cannonUnit.price)
    $('#knightPrice').html(knightUnit.price)
    if(playerOne.buyActive) {
        $('#moneyLeftAmt').html(playerOne.moneyLeft)
    } else if (playerTwo.buyActive) {
        $('#moneyLeftAmt').html(playerTwo.moneyLeft)
    }
}

function soldierBuy() {
    if (playerOne.buyActive && playerOne.moneyLeft >= soldierUnit.price) {
        playerOne.units.push(Object.assign(soldierUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= soldierUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= soldierUnit.price) {
        playerTwo.units.push(Object.assign(soldierUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p1-' + playerTwo.units.length
        playerTwo.moneyLeft -= soldierUnit.price
    }
    updateAmountsAndMoney()
}

function cavalryBuy() {
    if (playerOne.buyActive && playerOne.moneyLeft >= cavalryUnit.price) {
        playerOne.units.push(Object.assign(cavalryUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= cavalryUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= cavalryUnit.price) {
        playerTwo.units.push(Object.assign(cavalryUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p1-' + playerTwo.units.length
        playerTwo.moneyLeft -= cavalryUnit.price
    }
    updateAmountsAndMoney()
}

function archerBuy() {
    if (playerOne.buyActive && playerOne.moneyLeft >= archerUnit.price) {
        playerOne.units.push(Object.assign(archerUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= archerUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= archerUnit.price) {
        playerTwo.units.push(Object.assign(archerUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p1-' + playerTwo.units.length
        playerTwo.moneyLeft -= archerUnit.price
    }
    updateAmountsAndMoney()
}

function cannonBuy() {
    if (playerOne.buyActive && playerOne.moneyLeft >= cannonUnit.price) {
        playerOne.units.push(Object.assign(cannonUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= cannonUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= cannonUnit.price) {
        playerTwo.units.push(Object.assign(cannonUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p1-' + playerTwo.units.length
        playerTwo.moneyLeft -= cannonUnit.price
    }
    updateAmountsAndMoney()
}

function knightBuy() {
    if (playerOne.buyActive && playerOne.moneyLeft >= knightUnit.price) {
        playerOne.units.push(Object.assign(knightUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= knightUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= knightUnit.price) {
        playerTwo.units.push(Object.assign(knightUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p1-' + playerTwo.units.length
        playerTwo.moneyLeft -= knightUnit.price
    }
    updateAmountsAndMoney()
}

function updateAmountsAndMoney() {
    const selected = {
        soldier: 0,
        cavalry: 0,
        archer: 0,
        cannon: 0,
        knight: 0,
        moneyLeft: 0
    }
    if (playerOne.buyActive) {
        playerOne.units.forEach(function(unit) {
            selected[unit.type]++
        })
        selected.moneyLeft = playerOne.moneyLeft
    } else if (playerTwo.buyActive) {
        playerTwo.units.forEach(function (unit) {
            selected[unit.type]++
        })
        selected.moneyLeft = playerTwo.moneyLeft
    }
    for (key in selected) {
        $('#'+key+'Amt').html(selected[key])
    }
}

function playerDoneShopping() {
    if (playerOne.buyActive) {
        playerOne.buyActive = false
        console.log(playerOne)
        console.log(playerTwo)
        showScreen()
        whichPlayerShops()
        updateAmountsAndMoney()
    } else {
        playerTwo.buyActive = false
        console.log(playerTwo)
        changeGameState('gameScreen')
        showScreen()
        whichPlayerShops()
    }
}

whichPlayerShops()
showScreen()

//GAME MODE

function createGameField() {
    //create 20 rows and 20 cols
    for (var i = 0; i < gameSetup.rows; i++) {
        var row = [];
        for (var k = 0; k < gameSetup.cols; k++) {
            row.push(Object.assign(gameSquare))
        }
        gameSetup.gameField.push(row)
    }
    assignObstacles()
}

function assignObstacles() {
    gameSetup.gameField.forEach(function(row) {
        row.forEach(function(col) {
            if (Math.random() < 0.1) {
                col.obstacleHere = true;
            }
        })
    })
}

//needs to be asynch
function assignUnits() {
    playerOne.units.forEach(function(unit) {
        console.log('called')
        var randomRow = Math.floor((Math.random * 2) + 1)
        var randomCol = Math.floor((Math.random * 30) + 1)
        console.log(randomRow, randomCol)
        gameSetup.gameField[randomRow][randomCol].unitHere = true;
    })
}

function renderGameField() {
    var fieldToRender = '<div class="map">'
    gameSetup.gameField.forEach(function(row, rowInd) {
        row.forEach(function(col, colInd) {
            if (col.obstacleHere) {
                fieldToRender += '<div class="obstacle cell" id="' + rowInd + '-' + colInd + '"></div>'
            // } else if (col.unitHere) {
            //     fieldToRender += '<div class="unit cell" id="' + rowInd + '-' + colInd + '"></div>'
            } else {
                fieldToRender += '<div class="cell" id="' + rowInd + '-' + colInd + '"></div>'
            }
        })
    })
    fieldToRender += '</div>'
    $('#gameScreen').append(fieldToRender)
}

function initialSetup() {
    createGameField()
    renderGameField()
}

initialSetup()