import React from "react";
import DisplayBottomNavbar from './../display-bottom-navbar/display-bottom-navbar'
import Screen from './../screen/screen';
import NavigateScreen from './../navigateScreen/navigateScreen'
import AppPopup from './../popupApp/popupApp'

import './style.sass'




export default class Display extends React.Component{
    constructor(){
        super();
        this.setActiveNavigateScreen = this.setActiveNavigateScreen.bind(this);
        this.setFirstScreen = this.setFirstScreen.bind(this);
        this.setOpenPopupValue = this.setOpenPopupValue.bind(this);
        this.wrapperRef = React.createRef();

        this.state = {
            activeNavigateScreen: 0,
            firstScreen: undefined,
            openPopupValue: null
        }
    }

    createScreens(icons){
        let screensCount = Math.ceil(icons.length / 20);
        let screens = [];
        for(let i = 1; i <= screensCount; ++i){
            let iconsCurrentScreen = icons.splice(0, 20);
            let setFirstScreen = i === 1 ? this.setFirstScreen : null;
            screens.push(
                <Screen 
                    setOpenPopupValue={this.setOpenPopupValue}
                    setActiveNavigateScreen={this.setActiveNavigateScreen}
                    allScreens = {screensCount} 
                    wrapRef = {this.wrapperRef.current}
                    {...this.state}
                    setFirstScreen={setFirstScreen} 
                    key={i}> 
                    { iconsCurrentScreen } 
                </Screen>)
        }
        return screens;
    }

    setFirstScreen(element) {
        let currentState = this.state;
        this.setState({...currentState, firstScreen: element});
    }
    setActiveNavigateScreen (x){
        let st = this.state;
        this.setState({...st, activeNavigateScreen: x})
    }
    setOpenPopupValue(value) {
        this.setState({...this.state, openPopupValue: value})
    }

    render(){
        let { iconsNavbar, icons } = this.props;
        let {activeNavigateScreen, openPopupValue} = this.state;


        let screens = this.createScreens([...icons]);
        let dataActiveNavigateScreen = {
            setActiveNavigateScreen: this.setActiveNavigateScreen,
            activeNavigateScreen,
            circlesLength: screens.length
        };

        let popup = openPopupValue ? <AppPopup appName={openPopupValue} setOpenPopupValue={this.setOpenPopupValue} /> : null;

        return (
            <div className='display'>
                { popup } 
                <div className='display__screenWrapper' ref={this.wrapperRef} >
                    { screens }
                </div>
                <NavigateScreen  {...dataActiveNavigateScreen} />
                <DisplayBottomNavbar setOpenPopupValue={this.setOpenPopupValue} iconsNavbar = {iconsNavbar} />
            </div>
        )
    }
}



