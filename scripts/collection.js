const playerOne = {
    moneyLeft: 5000,
    units: [],
    buyActive: true,

}

const playerTwo = {
    moneyLeft: 5000,
    units: [],
    buyActive: true,
}

const soldierUnit = {
    id: null,
    type: 'soldier',
    movement: 5,
    radius: 1,
    armor: 1,
    dmg: 4,
    hp: 5,
    movementAvailable: null,
    attackAvailable: null,
    alive: true,
    price: 300,
}

const cavalryUnit = {
    id: null,
    type: 'cavalry',
    movement: 7,
    radius: 1,
    armor: 0,
    dmg: 4,
    hp: 4,
    movementAvailable: null,
    attackAvailable: null,
    alive: true,
    price: 500,
}

const archerUnit = {
    id: null,
    type: 'archer',
    movement: 4,
    radius: 3,
    armor: 1,
    dmg: 3,
    hp: 3,
    movementAvailable: null,
    attackAvailable: null,
    alive: true,
    price: 800,
}

const cannonUnit = {
    id: null,
    type: 'cannon',
    movement: 2,
    radius: 4,
    armor: 3,
    dmg: 6,
    hp: 5,
    movementAvailable: null,
    attackAvailable: null,
    alive: true,
    price: 2000,
}

const knightUnit = {
    id: null,
    type: 'knight',
    movement: 3,
    radius: 1,
    armor: 3,
    dmg: 5,
    hp: 5,
    movementAvailable: null,
    attackAvailable: null,
    alive: true,
    price: 1200,
}

gameSquare = {
    unitHere: false,
    obstacleHere: false,
}

gameSetup = {
    rows: 20,
    cols: 20,
    gameField: [],
}