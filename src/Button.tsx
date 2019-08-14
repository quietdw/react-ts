import React, { Children } from "react" // 不加会报错
import "./Button.css"

interface IProps {
  size?: string
  children?: string | JSX.Element | JSX.Element[]
}

export default function Button(props: IProps) {
  return <div className={`button button-${props.size}`}>{props.children}</div>
}
