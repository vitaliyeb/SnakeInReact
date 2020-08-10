import React from 'react';
import './style.sass';


export default class AppPopup extends React.Component {


    render(){
        let { appName, setOpenPopupValue } = this.props;
        return (
            <div className="popup">
                <p className="popup__text">Вы запустили приложение: {appName}</p>
                <div className='popup__button' onClick={()=>setOpenPopupValue(null)}>OK</div>
            </div>
        )
    }

}
