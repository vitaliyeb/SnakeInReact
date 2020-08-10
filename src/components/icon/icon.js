
import React from 'react';
import './style.sass';


export default class Icon extends React.Component {

    sendNameApp(appName){
        let name = appName.replace(/.png/, '');
        this.props.setOpenPopupValue(name);
    }

    render(){
        let { srcImg } = this.props;

        return (  

            <div className='icon' onClick={()=>this.sendNameApp(srcImg)}>
                <img src={require(`./../../../public/images/icons/${srcImg}`).default} />
            </div>
        )
    }

}
