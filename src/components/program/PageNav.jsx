import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import { AvarageItem } from './PageNav.style';
import { GLOBAL_RENDERER } from '../../constant';
import PageDialog from './dialog/PageDialog';
import ComponentDialog from './dialog/ComponentDialog';
const {
    PageCreate,
    ComponentCreate,
    VuexStoreCreate,
    FineStoreCreate
} = window.require(GLOBAL_RENDERER);


class PageNav extends Component {
    state = {
        path: '',
        name: '',
        isPageShow: false,
        isComponentShow: false
    };

    createPage() {
        this.setState({
            isPageShow: true
        });
    }

    createComponent() {
        this.setState({
            isComponentShow: true
        });
    }

    createVuexStore() {

    }

    createFineStore() {

    }

    submitCreatePage = () => {
        this.hidePageModal();
        PageCreate({
            path: this.state.path,
            name: this.state.name
        });
    };

    hidePageModal = () => {
        this.setState({
            isPageShow: false
        });
    };

    handleClick = ({ key }) => {
        switch(key) {
            case '1':
                this.createPage();
                break;
            case '2':
                this.createComponent();
                break;
            case '3':
                this.createVuexStore();
                break;
            case '4':
                this.createFineStore();
                break;
            default:
                break;
        }
    };

    render() {
        return<div>
            {
                this.state.isPageShow &&
                <PageDialog
                    path={this.state.path}
                    name={this.state.name}
                    setName = {name => this.setState({name})}
                    setPath = {path => this.setState({path})}
                    onSubmit={this.submitCreatePage}
                    onCancel={this.hidePageModal}
                />
            }
            {
                this.state.isComponentShow &&
                <ComponentDialog/>
            }
            <Menu mode="horizontal" onClick={this.handleClick}>
                <AvarageItem key="1"><Icon type="file" />
                    创建页面
                </AvarageItem>
                <AvarageItem key="2"><Icon type="layout" />
                    创建组件
                </AvarageItem>
                <AvarageItem key="3"><Icon type="global" />
                    创建Vuex store
                </AvarageItem>
                <AvarageItem key={4}><Icon type="api" />
                    创建Fine store
                </AvarageItem>
            </Menu>
        </div>
    }
}

export default PageNav;