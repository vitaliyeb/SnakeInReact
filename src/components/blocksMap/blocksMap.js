import React from 'react';
import './style.styl';


function BlockGrass (){
    return(<div className='grass'></div>)
}


function BlockSnakeHead (){
    return(<div className='snake-head'></div>)
}

function BlockSnakeBody (){
    return(<div className='snake-body'></div>)
}

function BlockSnakeTail(){
    return(<div className='snake-tail'></div>)
}

export {
    BlockGrass,
    BlockSnakeHead,
    BlockSnakeBody,
    BlockSnakeTail
}