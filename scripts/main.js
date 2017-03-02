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
    }
    gameState[input] = true;
}

function showScreen() {
    $('.screen').hide()
    switch(getGameState()) {
        case 'shopScreen':
            populatePrices()
            $('#shopScreen').show()
            break;
        case 'gameScreen': 
            initialSetup()
            $('#gameScreen').show()
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
        playerOne.units.push(Object.assign({}, soldierUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= soldierUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= soldierUnit.price) {
        playerTwo.units.push(Object.assign({}, soldierUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p2-' + playerTwo.units.length
        playerTwo.moneyLeft -= soldierUnit.price
    }
    updateAmountsAndMoney()
}

function soldierRefund() {
    if (playerOne.buyActive) {
        for (var i = playerOne.units.length -1; i >= 0; i--) {
            if (playerOne.units[i].type === "soldier") {                
                playerOne.units.splice(i, 1)
                playerOne.moneyLeft += soldierUnit.price
                break
            }            
        }        
    } else if (playerTwo.buyActive) {
        for (var i = playerTwo.units.length -1; i >= 0; i--) {
            if (playerTwo.units[i].type === "soldier") {                
                playerTwo.units.splice(i, 1)
                playerTwo.moneyLeft += soldierUnit.price
                break
            }            
        }
    }
    updateAmountsAndMoney()    
}

function cavalryBuy() {
    if (playerOne.buyActive && playerOne.moneyLeft >= cavalryUnit.price) {
        playerOne.units.push(Object.assign({}, cavalryUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= cavalryUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= cavalryUnit.price) {
        playerTwo.units.push(Object.assign({}, cavalryUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p2-' + playerTwo.units.length
        playerTwo.moneyLeft -= cavalryUnit.price
    }
    updateAmountsAndMoney()
}

function cavalryRefund() {
    if (playerOne.buyActive) {
        for (var i = playerOne.units.length -1; i >= 0; i--) {
            if (playerOne.units[i].type === "cavalry") {                
                playerOne.units.splice(i, 1)
                playerOne.moneyLeft += cavalryUnit.price
                break
            }            
        }        
    } else if (playerTwo.buyActive) {
        for (var i = playerTwo.units.length -1; i >= 0; i--) {
            if (playerTwo.units[i].type === "cavalry") {                
                playerTwo.units.splice(i, 1)
                playerTwo.moneyLeft += cavalryUnit.price
                break
            }            
        }
    }  
    updateAmountsAndMoney()  
}

function archerBuy() {
    if (playerOne.buyActive && playerOne.moneyLeft >= archerUnit.price) {
        playerOne.units.push(Object.assign({}, archerUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= archerUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= archerUnit.price) {
        playerTwo.units.push(Object.assign({}, archerUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p2-' + playerTwo.units.length
        playerTwo.moneyLeft -= archerUnit.price
    }
    updateAmountsAndMoney()
}

function archerRefund() {
    if (playerOne.buyActive) {
        for (var i = playerOne.units.length -1; i >= 0; i--) {
            if (playerOne.units[i].type === "archer") {                
                playerOne.units.splice(i, 1)
                playerOne.moneyLeft += archerUnit.price
                break
            }            
        }        
    } else if (playerTwo.buyActive) {
        for (var i = playerTwo.units.length -1; i >= 0; i--) {
            if (playerTwo.units[i].type === "archer") {                
                playerTwo.units.splice(i, 1)
                playerTwo.moneyLeft += archerUnit.price
                break
            }            
        }
    } 
    updateAmountsAndMoney()   
}

function cannonBuy() {
    if (playerOne.buyActive && playerOne.moneyLeft >= cannonUnit.price) {
        playerOne.units.push(Object.assign({}, cannonUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= cannonUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= cannonUnit.price) {
        playerTwo.units.push(Object.assign({}, cannonUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p2-' + playerTwo.units.length
        playerTwo.moneyLeft -= cannonUnit.price
    }
    updateAmountsAndMoney()
}

function cannonRefund() {
    if (playerOne.buyActive) {
        for (var i = playerOne.units.length -1; i >= 0; i--) {
            if (playerOne.units[i].type === "cannon") {                
                playerOne.units.splice(i, 1)
                playerOne.moneyLeft += cannonUnit.price
                break
            }            
        }        
    } else if (playerTwo.buyActive) {
        for (var i = playerTwo.units.length -1; i >= 0; i--) {
            if (playerTwo.units[i].type === "cannon") {                
                playerTwo.units.splice(i, 1)
                playerTwo.moneyLeft += cannonUnit.price
                break
            }            
        }
    }
    updateAmountsAndMoney()    
}

function knightBuy() {
    if (playerOne.buyActive && playerOne.moneyLeft >= knightUnit.price) {
        playerOne.units.push(Object.assign({}, knightUnit))
        playerOne.units[playerOne.units.length-1].id = 'p1-' + playerOne.units.length
        playerOne.moneyLeft -= knightUnit.price
    } else if (playerTwo.buyActive && playerTwo.moneyLeft >= knightUnit.price) {
        playerTwo.units.push(Object.assign({}, knightUnit))
        playerTwo.units[playerTwo.units.length-1].id = 'p2-' + playerTwo.units.length
        playerTwo.moneyLeft -= knightUnit.price
    }
    updateAmountsAndMoney()
}

function knightRefund() {
    if (playerOne.buyActive) {
        for (var i = playerOne.units.length -1; i >= 0; i--) {
            if (playerOne.units[i].type === "knight") {                
                playerOne.units.splice(i, 1)
                playerOne.moneyLeft += knightUnit.price
                break
            }            
        }        
    } else if (playerTwo.buyActive) {
        for (var i = playerTwo.units.length -1; i >= 0; i--) {
            if (playerTwo.units[i].type === "knight") {                
                playerTwo.units.splice(i, 1)
                playerTwo.moneyLeft += knightUnit.price
                break
            }            
        }
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
        showScreen()
        whichPlayerShops()
        updateAmountsAndMoney()
    } else {
        playerTwo.buyActive = false
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
            var cell = Object.assign({}, gameSquare)
            var rnd = Math.random()
            if (rnd < .1) {
                cell.obstacleHere = true            
            }
            row.push(cell)            
        }
        gameSetup.gameField.push(row)
    }
    placeUnits()
}

function placeUnits() {
    playerOne.units.forEach(function(unit) {
        placePlayerOneUnits(unit)
    })
    playerTwo.units.forEach(function(unit) {
        placePlayerTwoUnits(unit)
    })
}

function placePlayerOneUnits(unit) {
    var row = Math.floor((Math.random() * 3) + 1)
    var col = Math.floor((Math.random() * 19) + 1)
    if (!gameSetup.gameField[row][col].unitHere && !gameSetup.gameField[row][col].obstacleHere) {
        gameSetup.gameField[row][col].unitHere = true
        gameSetup.gameField[row][col].unitType = unit.type
        gameSetup.gameField[row][col].unitId = unit.id
    } else {
        placePlayerOneUnits(unit)
    }
}

function placePlayerTwoUnits(unit) {
    var row = Math.floor((Math.random() * 3) + 17)
    var col = Math.floor((Math.random() * 19) + 1)
    if (!gameSetup.gameField[row][col].unitHere && !gameSetup.gameField[row][col].obstacleHere) {
        gameSetup.gameField[row][col].unitHere = true
        gameSetup.gameField[row][col].unitType = unit.type
        gameSetup.gameField[row][col].unitId = unit.id
    } else {
        placePlayerTwoUnits(unit)
    }
}

function selectedCell(cell) {
    console.log(cell)
}

function renderGameField() {
    var fieldToRender = '<div class="map">'
    gameSetup.gameField.forEach(function(row, rowInd) {
        row.forEach(function(col, colInd) {
            if (col.obstacleHere) {
                fieldToRender += '<div class="obstacle cell" id="' + rowInd + '-' + colInd + '"></div>'
            } else if (col.unitHere) {
                fieldToRender += '<div class="cell unit ' + col.unitId.substr(0,2) + '" id="' + rowInd + '-' + colInd + '"></div>'
            } else {
                fieldToRender += '<div class="cell" id="' + rowInd + '-' + colInd + '"></div>'
            }
        })
    })
    fieldToRender += '</div>'
    $('#gameScreen').append(fieldToRender)
    $('.cell').click(function() {
        var clickedCell = $(this)
        selectedCell(clickedCell)
    })
}

function initialSetup() {
    createGameField()
    renderGameField()
}


