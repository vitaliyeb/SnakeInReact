import React from 'react';
import './style.sass'

let HorizontalIpad = function (props){
    return (
        <div className='display-wrapped display-wrapped_horizontal-ipad'>
            <span className='display-wrapped__ipad-camera display-wrapped__ipad-camera_horizontal  '></span>
            { props.children }
            <span className='display-wrapped__bottom-button display-wrapped__bottom-button_horizontal-ipad '></span>
        </div>
    )
}

let VerticalalIpad = function (props){
    return (
        <div className='display-wrapped display-wrapped_vertical-ipad'>
            <span className='display-wrapped__ipad-camera display-wrapped__ipad-camera_vertical  '></span>
                { props.children }
            <span className='display-wrapped__bottom-button display-wrapped__bottom-button_vertical-ipad '></span>
        </div>
    )
}

let HorizontalIphone = function (props){
    return (
        <div className='display-wrapped display-wrapped_iphone display-wrapped_horizontal-iphone'>
            <div className='display-wrapped__top-elements display-wrapped__top-elements_horizontal'>
                <div className='top-element__camera top-element__camera_horizontal'></div>
                <div className='top-element__speaker top-element__speaker_horizontal'></div>
            </div>
            { props.children }
            <span className='display-wrapped__bottom-elements display-wrapped__bottom-elements_horizontal'></span>
        </div>
    )
}

let VerticalalIphone = function (props){
    return (
        <div className='display-wrapped display-wrapped_iphone display-wrapped_vertical-iphone'>
            <div className='display-wrapped__top-elements display-wrapped__top-elements_vertical'>
                <div className='top-element__camera top-element__camera_vertical'></div>
                <div className='top-element__speaker top-element__speaker_vertical'></div>
            </div>
            { props.children }
            <span className='display-wrapped__bottom-elements display-wrapped__bottom-elements_vertical'></span>
        </div>
    )
}

export { 
    HorizontalIpad,
    VerticalalIpad,
    HorizontalIphone,
    VerticalalIphone
};