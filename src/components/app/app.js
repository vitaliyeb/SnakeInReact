import React from "react";
import {
  HorizontalIpad,
  VerticalalIpad,
  HorizontalIphone,
  VerticalalIphone,
} from "../display-wrappers/display-wrappers";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      wrapperName: this.setWrappedName(),
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
    let { wrapperName } = this.state;

    switch (wrapperName){
        case "ipad-horizontal":
            return <HorizontalIpad><h2>children</h2></HorizontalIpad>
        case "ipad-vertical":
            return <VerticalalIpad><h2>children</h2></VerticalalIpad>
        case "iphone-horizontal":
            return <HorizontalIphone><h2>children</h2></HorizontalIphone>
        case "iphone-vertical":    
            return <VerticalalIphone><h2>children</h2></VerticalalIphone> 
        }
    }
}
