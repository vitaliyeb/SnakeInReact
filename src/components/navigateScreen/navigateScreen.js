
import React from 'react';
import './style.sass'


const Circles = function ({isActive}){

    let classModify = isActive ? 'circles__item_active' : null;

    return(
        <div className={`circles__item ${classModify}`}>

        </div>
    )
}


export default class NavigateScreen extends React.Component {


    render(){
        let {activeNavigateScreen, circlesLength} = this.props;
        let circles = [];
        for( let i = 0; i < circlesLength; i++ ){
            let isActive = activeNavigateScreen === i ? true:false;
            circles.push(<Circles key={i} isActive={isActive} />);
        }
    

        return (
            <div className='circles'>
                { circles }
            </div>
        )
    }

}
