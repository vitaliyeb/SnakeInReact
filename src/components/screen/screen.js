
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
        currentScreen.ondragstart = function() {
            return false;
          }
        let screenWidth = currentScreen.offsetWidth;

        let differenceX = 0;
        let mouseMove = ({layerX})=>{
            differenceX = layerX - firstClick;
            currentScreen.style.marginLeft = `${differenceX}px`
        }


        let closeMove = function (){
            currentScreen.removeEventListener('mousemove', mouseMove);
        }

        currentScreen.addEventListener('mousemove', mouseMove)
        currentScreen.onmouseleave  = closeMove;
        currentScreen.onmouseup = closeMove;
    }

    render(){
        let icons = this.props.children;
        return (
             <div 
                ref={this.screenRef}
                onDragStart={()=> false}
                onMouseDown={({ nativeEvent: {offsetX} })=>this.screenCapture(offsetX)}
                className='screen'>
                 <p>ascsaacsa</p>
             </div>
        )
    }
}