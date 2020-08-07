
import React from 'react';
import './style.sass';


export default class Screen extends React.Component {
    constructor(){
        super();
        this.screenRef = React.createRef();
        this.state = {
            deviation: 0
        }
    }


    screenCapture(firstClick){
        let currentScreen = this.screenRef.current;
        console.log(firstClick);
        let mouseMove = ({layerX})=>{
            console.log(layerX, firstClick);
        }



        // currentScreen.addEventListener('mousemove', mouseMove)
        // currentScreen.onmouseup = ()=>{
        //     currentScreen.removeEventListener('mousemove', mouseMove);
        // }
    }

    render(){
        let icons = this.props.children;
        return (
             <div 
                ref={this.screenRef}
                onMouseDown={({ nativeEvent: {offsetX} })=>this.screenCapture(offsetX)}
                className='screen'>
                 
             </div>
        )
    }
}