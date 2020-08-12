import React from 'react';
import map from './../../map';
import { BlockGrass, BlockSnakeHead, BlockSnakeBody, BlockSnakeTail } from './../blocksMap/blocksMap';
import './style.styl'

export default class App extends React.Component {
    constructor(){
        super();
        this.direction = { x: 1, y: 0 };
        this.maxIndexBody = 1;
        this.sizeMap = {row: map.length, column: map[0].length}
        this.endCoordinates = {
            head: {row: 3, index: 2},
            tail: {row: 3, index: 0}
        }
        this.state = {
            map: map,
        }
    }

    onKeyDown({key}) {
        switch (key){
            case 'ArrowRight':
                return this.direction = { x: 1, y: 0 };
            case 'ArrowLeft':
                return this.direction = { x: -1, y: 0 };   
            case 'ArrowDown':
                return this.direction = { x: 0, y: 1 };
            case 'ArrowUp':
                return this.direction = { x: 0, y: -1 };                
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

    bodyMove(){
        return this.state.map.map((row, indexRow)=>{
            return row.map((el, ind)=>{
                if(el.typeId === 2) return {typeId: 3, indexBody: 1}
                if(el.typeId === 4) return {typeId: 1}
                if(el.typeId === 3 && el['indexBody'] === this.maxIndexBody)  this.endCoordinates['tail'] = {row:indexRow, index: ind};
                return el;
            })
        });
    }

    addHeadAndTail(map) {
        let {head, tail} = this.endCoordinates;
        let {x, y} = this.direction;
        let {row, column} = this.sizeMap;
        let YpositionHead = head['row']+y;
        let XpositionHead = head['index']+x;

        XpositionHead = XpositionHead >= column ? 0 : XpositionHead;
        XpositionHead = XpositionHead === -1 ? column-1 : XpositionHead;
        YpositionHead = YpositionHead === row ? 0 : YpositionHead;
        YpositionHead = YpositionHead === -1 ? row-1 : YpositionHead;


        head['row'] = YpositionHead; 
        head['index'] = XpositionHead;



        map[head['row']][head['index']] = {typeId: 2}
        map[tail['row']][tail['index']] = {typeId: 4}
        
    }



    componentDidMount(){
        document.addEventListener('keydown', this.onKeyDown.bind(this))
        setInterval(()=>{
           let bodyMap = this.bodyMove();
           this.addHeadAndTail(bodyMap)
            this.setState({map: bodyMap})
        }, 100);
    }


    render(){
        let Map = this.renderMap();


        return(
            <div className='snake-map'>
                { Map }
            </div> 
        )
    }
} 