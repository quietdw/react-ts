import React from "react"
import ReactDOM from "react-dom"
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
import Button from "./Button"

const fn: React.MouseEventHandler = function(e) {
  console.log(1111)
  // console.log(e)
}

ReactDOM.render(
  <div>
    <Button size="small">
      <span>123</span>
      <span>123</span>
    </Button>
    <Button onClick={fn}> 1 2</Button>
    <Button size="large">3</Button>
  </div>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
