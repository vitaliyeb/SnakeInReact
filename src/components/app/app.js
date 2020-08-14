import React from 'react';
import map from './../../map';
import Menu from './../menu/menu';
import Setting from './../setting/setting';
import { BlockGrass, BlockSnakeHead, BlockSnakeBody, BlockSnakeTail, BlockPlod } from './../blocksMap/blocksMap';
import './style.styl'


function Score({value}){

    return(
        <p className='score'>{value}</p>
    )
}

export default class App extends React.Component {
    constructor(){
        super();
        this.settingConfig = {
            timeLoop: 200
        };
        this.scoreCouner = 0;
        this.history = ['menu'];
        this.direction = { x: 1, y: 0 };
        this.currentDirection = {x: 1, y: 0};
        this.maxIndexBody = 1;
        this.intervalId = undefined;
        this.plod = {row: 3, column: 5};
        this.sizeMap = {row: map.length, column: map[0].length}
        this.endCoordinates = {
            head: {row: 3, index: 2},
            tail: {row: 3, index: 0}
        }
        this.state = {
            activeState: 'menu',
            map: this.deepCopy(map),
        }
    }

    onKeyDown({key}) {
        switch (key){
            case 'ArrowRight':
                return this.currentDirection['x'] === 0 ? this.direction = { x: 1, y: 0 } : null;
            case 'ArrowLeft':
                return this.currentDirection['x'] === 0 ? this.direction = { x: -1, y: 0 } : null;
            case 'ArrowDown':
                return this.currentDirection['y'] === 0 ? this.direction = { x: 0, y: 1 } : null;
            case 'ArrowUp':
                return this.currentDirection['y'] === 0 ? this.direction = { x: 0, y: -1 } : null;          
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
                case 5:
                    return <BlockPlod key={index} />
            }
            
        });
    }
    
    deepCopy (a){
        return a.map(el=>el.map(el=>({...el})));
    }

    eatPlod() {
        this.plod = undefined;
        this.scoreCouner +=100;
    }

    resetData() {
        this.direction = { x: 1, y: 0 };
        this.currentDirection = {x: 1, y: 0};
        this.maxIndexBody = 1;
        this.plod = {row: 3, column: 5};
        this.endCoordinates = {
            head: {row: 3, index: 2},
            tail: {row: 3, index: 0}
        }
        this.scoreCouner = 0;
    }

    endGame(){
        clearInterval(this.intervalId);
        setTimeout(()=>this.setState({activeState: 'menu', map: this.deepCopy(map) }), 2000)
        alert(`Вы набрали ${this.scoreCouner} очков`)
        this.resetData();
    }

    bodyMove(){
        let {row: rowPlod, column: columnPlod } = this.plod;
        return this.state.map.map((row, indexRow)=>{
            return row.map((el, ind)=>{
                if(el.typeId === 2) return {typeId: 3, indexBody: 1}
                if(el.typeId === 4) return {typeId: 1}
                if(el.typeId === 3) {
                    if(el['indexBody'] === this.maxIndexBody ) this.endCoordinates['tail'] = {row:indexRow, index: ind};
                    let ui = ++el['indexBody'];
                    return {...el, indexBody: ui }
                }
                if(indexRow === rowPlod && columnPlod === ind) return {typeId: 5}
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

        if(map[YpositionHead][XpositionHead]['typeId'] === 3 || map[YpositionHead][XpositionHead]['typeId'] === 4){
            map[head['row']-y][head['index']-x] = {typeId: 2};
            map[tail['row']][tail['index']] = {typeId: 4}
            return this.endGame();
        }

        if(map[YpositionHead][XpositionHead]['typeId'] === 5) {
            ++this.maxIndexBody;
            map[head['row']][head['index']] = {typeId: 2};
            map[tail['row']][tail['index']] = {typeId: 3, indexBody: this.maxIndexBody};
            return this.eatPlod();
        };

        map[head['row']][head['index']] = {typeId: 2}
        map[tail['row']][tail['index']] = {typeId: 4}
        
    }

    createPlod(map) {
        let {row} = this.sizeMap;
        function createPlodRecursive (randomRow){
            if(randomRow >= row) return createPlodRecursive(0)
            let freePlace = map[randomRow].filter((el)=>el['typeId'] === 1);
            if(!freePlace.length) return createPlodRecursive(randomRow+1);
            let ri = Math.round(Math.random()*(freePlace.length-1));
            let counter = 0;
            let  rc = undefined; 
            for(let i = 0; i < map[randomRow].length; i++){
                let el = map[randomRow][i];
                if(el['typeId'] === 1){
                    if(counter === ri) {
                        rc = i;
                        break;
                    }
                    counter+=1;
                }
            }
            return {row: randomRow, column: rc};
        }

        let randomRow = Math.floor(Math.random()*map.length)

        this.plod = createPlodRecursive(randomRow);
    }

    componentDidMount(){
        document.addEventListener('keydown', this.onKeyDown.bind(this));
    }

    gameLoop(){
        this.intervalId = setInterval(()=>{
            this.currentDirection = this.direction;
            let bodyMap = this.bodyMove();
            this.addHeadAndTail(bodyMap)
            if(!this.plod) this.createPlod(bodyMap);
            this.setState({map: bodyMap})
        }, this.settingConfig.timeLoop);
    }

    onStart() {
        this.history.push('game');
        this.setState({activeState: 'game'});
        this.gameLoop()
    }

    openSetting(){
        this.history.push('setting');
        this.setState({activeState: 'setting'});
    }
    setConfigProperty(properyName, value){
        this.settingConfig[properyName] = value;
    }

    goBack(){
        let history = this.history;
        this.history.pop();
        this.setState({activeState: history[history.length-1]})
    }

    render(){
        let {activeState, map} = this.state;
        let Component;


        switch (activeState){
            case 'menu':
                Component = <Menu openSetting={this.openSetting.bind(this)} start={this.onStart.bind(this)} />;
                break;
            case 'game':
                let Map = this.renderMap();
                Component = (<div className='snake-map'>{ Map }</div>);
                break;
            case 'setting':
                Component = <Setting settingConfig={this.settingConfig} goBack={this.goBack.bind(this)} setConfigProperty={this.setConfigProperty.bind(this)} />;
                break;    

        }    

        return(
            <div className="game-window">
                {activeState === 'game' ? <Score value={this.scoreCouner} /> : null}
                { Component }
            </div>
        )
    }
} 