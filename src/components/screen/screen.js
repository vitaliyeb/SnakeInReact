
import React from 'react';
import './style.sass';


export default class Screen extends React.Component {
    constructor(){
        super();
        this.screenRef = React.createRef();
        this.firstScreen = undefined;
        this.state = {
            deviation: 0
        }
    }


    screenCapture(firstClick){
        
        let currentScreen = this.screenRef.current;
        let {firstScreen, setActiveNavigateScreen, activeNavigateScreen, allScreens} = this.props;
        let isCloseFunctionStart = false;
        let feml = parseInt(firstScreen.style.marginLeft);
        if(!feml) feml = 0;
        firstScreen.style.transitionDuration = `0s`;


        let screenWidth = currentScreen.offsetWidth;

        let  differenceX = 0;
        let mouseMove = ({layerX})=>{
            differenceX = layerX - firstClick;
            let nml = differenceX+feml;
            if(nml > 0 || (allScreens === activeNavigateScreen+1 && feml > nml)) return differenceX = 0;
            firstScreen.style.marginLeft = `${nml}px`
        }


        function animateScreen(pos) {
            firstScreen.style.marginLeft = `${pos+feml}px`;
            firstScreen.style.transitionDuration = `.5s`;
        }

        let closeMove = function (){
            if(isCloseFunctionStart) return;
            isCloseFunctionStart = true;
            currentScreen.removeEventListener('mousemove', mouseMove);
            let newDifferenceX = Math.abs(differenceX);
            let op = screenWidth / 100;
            if(Math.floor(newDifferenceX/op) < 30 ) return animateScreen(0);
            animateScreen(differenceX < 0 ? screenWidth*-1 : screenWidth);
            setActiveNavigateScreen(differenceX < 0 ? activeNavigateScreen+1: activeNavigateScreen-1)
        }

        currentScreen.addEventListener('mousemove', mouseMove)
        currentScreen.onmouseleave  = closeMove;
        currentScreen.onmouseup = closeMove;
    }

    componentDidMount(){
        let {setFirstScreen} = this.props;
        if(setFirstScreen) setFirstScreen(this.screenRef.current);
    }

    render(){
        let icons = this.props.children;

        return (
             <div 
                ref={this.screenRef}
                onDragStart={function(){return false}}
                onMouseDown={({ nativeEvent: {offsetX} })=>this.screenCapture(offsetX)}
                className='screen'>
                 
             </div>
        )
    }
}