
import React from 'react';
import './style.sass';


export default class Icon extends React.Component {


    render(){
        let { srcImg } = this.props;
        return (
    
                        

            <div className='icon'>
                <img src={require(`./../../../public/images/icons/${srcImg}`).default} />
            </div>
        )
    }

}
