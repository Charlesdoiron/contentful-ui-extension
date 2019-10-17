import { init } from "contentful-ui-extensions-sdk"
import React from "react"
import ReactDOM from "react-dom"
import { Button } from "@contentful/forma-36-react-components"
import "@contentful/forma-36-react-components/dist/styles.css"

class App extends React.Component {
  render() {
    return (
      <Button
        buttonType="primary"
        onClick={() => {
          console.log("You clicked on Forma36 button")
        }}
      >
        Click on me
      </Button>
    )
  }
}

init(() => {
  ReactDOM.render(<App />, document.getElementById("root"))
})