import React, { Component } from 'react';
import { Menu, Icon } from 'antd';


class Nav extends Component {
    create = () => {

    };
    install = () => {

    };
    run = () => {

    };
    build = () => {

    };

    render() {
        return <Menu mode="horizontal">
            <Menu.Item><Icon type="profile" onClick={this.create}/>创建项目</Menu.Item>
            <Menu.Item><Icon type="download" onClick={this.install}/>安装依赖</Menu.Item>
            <Menu.Item><Icon type="play-circle" onClick={this.run}/>运行项目</Menu.Item>
            <Menu.Item><Icon type="sync" onClick={this.build}/>打包项目</Menu.Item>
        </Menu>;
    }
}


export default Nav;