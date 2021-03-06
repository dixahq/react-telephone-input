import React, { Component } from "react"
import { render } from "react-dom"

import RTI from "../../src/withStyles"

class Demo extends Component {
  render() {
    return (
      <div>
        <h1>React Telephone Input Demo</h1>
        <h4>Base case (preferredCountries and defaultCountry (dk))</h4>
        <RTI
          preferredCountries={['af', 'al']}
          defaultCountry="dk"
          flagsImagePath="./images/flags.png"
        />
        <h4>With initial value (defaultCountry and initialValue)</h4>
        <RTI
          defaultCountry="in"
          flagsImagePath="./images/flags.png"
          initialValue="+9112121"
        />
        <h4>With initial value and autoFocus on input (initialValue and inputProps autoFocus)</h4>
        <RTI
          defaultCountry="in"
          flagsImagePath="./images/flags.png"
          initialValue="+9112121"
          inputProps={{ autoFocus: true }}
        />
        <h4>Different country - Albania (defaultCountry and initialValue)</h4>
        <RTI
          defaultCountry="al"
          flagsImagePath="./images/flags.png"
          initialValue="3559112121"
        />
      </div>
    )
  }
}

render(<Demo />, document.querySelector("#demo"))
