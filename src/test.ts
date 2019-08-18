import React from 'react'

const Layout: React.FunctionComponent & { Header: React.FunctionComponent } = () => {
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