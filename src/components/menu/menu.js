import React from 'react';
import './style.styl'


export default class Menu extends React.Component {


    render(){
        let {start, openSetting} = this.props;


        return(
            <div className='menu'>
                <p className='menu__button' onClick={()=>start()}>Начать</p>
                <p className='menu__button' onClick={()=>openSetting()}>Настройки</p>
                <p className='menu__button'>Выход</p>
            </div>
        )
    }
}