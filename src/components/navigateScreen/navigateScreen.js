
import React from 'react';
import './style.sass'


const Circles = function ({isActive, indexElement, setActiveNavigateScreen}){

    let classModify = isActive ? 'circles__item_active' : null;
    return(
        <div className={`circles__item ${classModify}`} onClick={()=>setActiveNavigateScreen(indexElement)}>

        </div>
    )
}


export default class NavigateScreen extends React.Component {

    

    render(){
        let {activeNavigateScreen, circlesLength, setActiveNavigateScreen} = this.props;
        let circles = [];
        for( let i = 0; i < circlesLength; i++ ){
            let isActive = activeNavigateScreen === i ? true:false;
            circles.push(<Circles key={i} setActiveNavigateScreen={setActiveNavigateScreen} indexElement={i} isActive={isActive} />);
        }
    

        return (
            <div className='circles'>
                { circles }
            </div>
        )
    }

}
