import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { showMessage } from '../../store/actions/message';
import { GLOBAL_RENDERER } from '../../constant';
const { createProgram, installDependencies, runProgram, buildProgram } = window.require(GLOBAL_RENDERER);



class Nav extends Component {
    create() {
        createProgram();
    };
    install() {
        installDependencies();
    }
    run() {
        runProgram();
    }
    build() {
        buildProgram();
    };

    handleClick = ({key}) =>{
        switch(key) {
            case '1':
                this.create();
                break;
            case '2':
                this.install();
                break;
            case '3':
                this.run();
                break;
            case '4':
                this.build();
                break;
            default:
                this.create();
        }
    };
    render() {
        return <Menu mode="horizontal" onClick={this.handleClick}>
            <Menu.Item key="1" ><Icon type="profile" />创建项目</Menu.Item>
            <Menu.Item key="2" ><Icon type="download"/>安装依赖</Menu.Item>
            <Menu.Item key="3" ><Icon type="play-circle"/>运行项目</Menu.Item>
            <Menu.Item key="4" ><Icon type="sync" />打包项目</Menu.Item>
        </Menu>;
    }

}


export default connect(() => ({}), { showMessage })(Nav);