import React from 'react';
import './style.styl'


export default class Setting extends React.Component {
    constructor(){
        super();
        this.state = {
            timeLoop: undefined
        }
    }

    componentDidMount(){
        let { settingConfig: {timeLoop} } = this.props;
        this.setState({timeLoop})
    }

    setProperty(name, value){
        let { setConfigProperty } = this.props;
        setConfigProperty(name, value);
        this.setState({[name]: value});
    }


    render(){
        let { timeLoop } = this.state;
        let { goBack } = this.props;

        return(
            <div className='setting'>
                <h2>НАСТРОЙКИ</h2>
                <div className='setting__row'>
                    <p className='setting__subheading'>Сложность:</p>
                    <div className='setting__variables'>
                        <p onClick={()=>this.setProperty('timeLoop', 200)} className={timeLoop === 200 ? 'active' : null}>Cложно</p>
                        <p onClick={()=>this.setProperty('timeLoop', 400)} className={timeLoop === 400 ? 'active' : null}>Средне</p>
                        <p onClick={()=>this.setProperty('timeLoop', 600)} className={timeLoop === 600 ? 'active' : null}>Легко</p>
                    </div>
                </div>
                <p className='back' onClick={()=>goBack()}>Назад</p>
            </div>
        )
    }
}