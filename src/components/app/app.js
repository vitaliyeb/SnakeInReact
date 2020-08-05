import React from 'react';
import { HorizontalIpad, VerticalalIpad, HorizontalIphone, VerticalalIphone } from '../display-wrappers/display-wrappers'

export default class App extends React.Component{



    render(){
        return (
            <VerticalalIphone>
                <h2>children</h2>
            </VerticalalIphone>
        )
    }
} 