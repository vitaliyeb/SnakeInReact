import React from "react";

import {
  HorizontalIpad,
  VerticalalIpad,
  HorizontalIphone,
  VerticalalIphone,
} from "../display-wrappers/display-wrappers";
import Display from './../display/display'; 

const dataIcons = require('./../../services/data.json');


export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      wrapperName: this.setWrappedName(),
      dataIcons
    };
  }

  setWrappedName() {
    let vw = document.documentElement.clientWidth;
    let setName = null;
    let wrapperName = null;
    if (this.state) wrapperName = this.state.wrapperName;

    if (vw > 1024) setName = "ipad-horizontal";
    if (vw < 1024 && vw > 768) setName = "ipad-vertical";
    if (vw < 768 && vw > 568) setName = "iphone-horizontal";
    if (vw < 568) setName = "iphone-vertical";

    if (wrapperName != setName && this.state) return this.setState({ wrapperName: setName });
    return setName;
  }

  componentDidMount() {
    let maxSteep = 10;
    let currentSteep = 0;
    window.addEventListener("resize", (event) => {
      if (currentSteep < maxSteep) return ++currentSteep;
      currentSteep = 0;
      this.setWrappedName();
    });
  }

  render() {
    let { wrapperName, dataIcons } = this.state;

    switch (wrapperName){
        case "ipad-horizontal":
            return <HorizontalIpad> <Display {...dataIcons} /> </HorizontalIpad>
        case "ipad-vertical":
            return <VerticalalIpad> <Display {...dataIcons} /> </VerticalalIpad>
        case "iphone-horizontal":
            return <HorizontalIphone> <Display {...dataIcons} /> </HorizontalIphone>
        case "iphone-vertical":     
            return <VerticalalIphone> <Display {...dataIcons} /> </VerticalalIphone> 
        }
    }
}
