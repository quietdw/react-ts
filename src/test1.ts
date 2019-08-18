import React from 'react'

type Layout = React.FunctionComponent & { Header: React.FunctionComponent }  // type相给已知的类型当于一个别名，一般大写，interface是新建一个类型
const Layout: Layout = () => {
    return React.createElement('div', null, 'hi')
}

Layout.Header = () => {
    return React.createElement('div', null, 'hi')
}

// 另一种写法
interface Layout2 extends React.FunctionComponent {
    Header: React.FunctionComponent
}

const Layout2: Layout2 = () => {
    return React.createElement('div', null, 'hi')
}

Layout2.Header = () => {
    return React.createElement('div', null, 'hi')
}

export default { Layout, Layout2 }