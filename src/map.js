
const grass = {
    typeId: 1
}

const snakeHead = {
    typeId: 2
}

const snakeBody = {
    typeId: 3,
    indexBody: 1
}

const snakeTail = {
    typeId: 4
}

const plod = {
    typeId: 5
}


const  map = [
    [grass,grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [snakeTail,snakeBody,snakeHead,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass,grass],
    [grass,grass,grass,grass,grass,grass,grass,grass,grass,grass]
]


export default map;