
import React from 'react';
import Icon from './../icon/icon';

import './style.sass';


export default class DisplayBottomNavbar extends React.Component {


    render(){
        let { iconsNavbar, setOpenPopupValue } = this.props;
        let icons = iconsNavbar.map((el, key)=> <Icon setOpenPopupValue={setOpenPopupValue} key={key} srcImg={el} />)

        return (
            <div className='displayBottomNavbar'>
                <div className='displayBottomNavbar__icons'>
                    { icons }
                </div>
            </div>
        )
    }

}