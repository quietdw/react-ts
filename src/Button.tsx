import React, { Children } from "react" // 不加会报错
import "./Button.css"

interface IProps {
  size?: string
  onClick?: React.MouseEventHandler
}

const Button: React.FunctionComponent<IProps> = function(props) {
  return (
    <div onClick={props.onClick} className={`button button-${props.size}`}>
      {props.children}
    </div>
  )
}

export default Button
