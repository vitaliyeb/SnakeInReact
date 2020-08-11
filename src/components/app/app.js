import React from 'react';
import map from './../../map';
import { BlockGrass, BlockSnakeHead, BlockSnakeBody, BlockSnakeTail } from './../blocksMap/blocksMap';
import './style.styl'

export default class App extends React.Component {
    constructor(){
        super();
        this.state = {
            map: map,
            direction: {
                x: 0, 
                y: 0
            }
        }
    }


    renderMap() {
        let { map } = this.state;
        return map.flat().map((el, index)=>{
            switch (el.typeId){
                case 1:
                    return <BlockGrass key={index} />
                case 2:
                    return <BlockSnakeHead key={index} />
                case 3:     
                    return <BlockSnakeBody key={index} />
                case 4:
                    return <BlockSnakeTail key={index} />
            }
            
        });
    }

    componentDidMount(){
        setInterval(()=>{
            
        }, 1000);
    }

    render(){
        let Map = this.renderMap();
        console.log(Map);

        return(
            <div className='snake-map'>
                { Map }
            </div> 
        )
    }
} 