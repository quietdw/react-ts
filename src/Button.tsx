import React from "react" // 不加会报错
import "./Button.css"

// 优先使用接口

interface IProps {
  size?: string
  onClick?: React.MouseEventHandler
}

interface Istate {
  n: number
}

// type IProps = {
//   size?: string
//   onClick?: React.MouseEventHandler
// }

// const Button: React.FunctionComponent<IProps> = function(props) {
//   return (
//     <div onClick={props.onClick} className={`button button-${props.size}`}>
//       {props.children}
//     </div>
//   )
// }

class Button extends React.Component<IProps, Istate> {
  // 默认带有 children prop
  static displayName = "JiangButton" // 组件展示的名称，用于调试
  static defaultProps = {
    // 属性的默认值，ts不能检测默认值存在，当属性值是可选的时候，对属性进行操作，会提示该属性值是undefined，而不是默认值。
    size: "normal"
  }

  constructor(props: IProps) {
    // 不指定IProps会报错
    super(props)
    // console.log(this.props.size! + 1) // 加感叹号 我保证 size 的值是正确类型的，断言的简写 this.props.size as string
    this.state = {
      n: 1
    }
  }

  onClick = () => {
    this.setState({
      n: this.state.n + 1
    })
  }

  render() {
    return (
      <div
        onClick={this.onClick}
        className={`button button-${this.props.size}`}
      >
        {this.props.children}
        {this.state.n}
      </div>
    )
  }
}

export default Button
