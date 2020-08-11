import ReactDOM from 'react-dom';
import React, {Suspense} from 'react';

const ThemeContext = React.createContext('неизвестно');

class NameUser extends React.Component {

    render(){
        let name = this.props.nameUser;

        return(
            <p>{name}</p>
        )
    }

}


export default class OtherComponent extends React.Component {

    render(){
        return(
            <div>
                <p>Hello you name:</p>
                <ThemeContext.Consumer>
                    {(value)=> <NameUser nameUser={value} />}
                </ThemeContext.Consumer>
            </div>
        )
    }
}





class Clock extends React.Component {

    render(){
        return (
            <div>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <ThemeContext.Provider value='Vitaliy'>
                        <OtherComponent />
                    </ThemeContext.Provider>
                </Suspense>
            </div>
        )
    }
}






ReactDOM.render(
    <Clock />,
    document.getElementById('root')
)



