import React from "react" // 不加会报错
import "./Button.css"

interface IProps {
  size?: string
}

export default function Button(props: IProps) {
  return <div className={`button button-${props.size}`}>button</div>
}
