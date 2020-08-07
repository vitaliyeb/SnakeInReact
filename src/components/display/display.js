import React from "react";
import DisplayBottomNavbar from './../display-bottom-navbar/display-bottom-navbar'
import Screen from './../screen/screen';
import NavigateScreen from './../navigateScreen/navigateScreen'

import './style.sass'




export default class Display extends React.Component{
    constructor(){
        super();
        this.state = {
            activeNavigateScreen: 0
        }
    }

    createScreens(icons){
        let screensCount = Math.ceil(icons.length / 20);
        let screens = [];
        for(let i = 1; i <= screensCount; ++i){
            let iconsCurrentScreen = icons.splice(0, 20);
            screens.push(<Screen key={i}> { iconsCurrentScreen } </Screen>)
        }
        return screens;
    }

    render(){
        let { iconsNavbar, icons } = this.props;
        let {activeNavigateScreen} = this.state;

        let screens = this.createScreens([...icons]);
        let dataActiveNavigateScreen = {
            activeNavigateScreen,
            circlesLength: screens.length
        };

        return (
            <div className='display'>
                <div className='display__screenWrapper'>
                    { screens }
                </div>
                <NavigateScreen {...dataActiveNavigateScreen} />
                <DisplayBottomNavbar iconsNavbar = {iconsNavbar} />
            </div>
        )
    }
}



