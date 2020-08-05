
import React from 'react';
import Icon from './../icon/icon';

import './style.sass';


export default class DisplayBottomNavbar extends React.Component {


    render(){
        let { iconsNavbar } = this.props;
        let icons = iconsNavbar.map((el, key)=> <Icon key={key} srcImg={el} />)

        return (
            <div className='displayBottomNavbar'>
                { icons }
            </div>
        )
    }

}