import React from "react";
import DisplayBottomNavbar from './../display-bottom-navbar/display-bottom-navbar'
import './style.sass'




export default class Display extends React.Component{
    constructor(){
        super();
    }

    render(){
        let { iconsNavbar } = this.props;
        console.log(this.props);
        return (
            <div className='display'>
                
                <DisplayBottomNavbar iconsNavbar = {iconsNavbar} />
            </div>
        )
    }
}



