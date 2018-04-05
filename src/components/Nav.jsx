import React from 'react';
import styled from 'styled-components';
import { Menu, Icon} from 'antd';
import { Link } from 'react-router-dom';
const { Item } = Menu;


const NavWrap = styled.div`
    width: 100px;
    height: 100vh;
    background-color: rgb(31, 37, 39);
`;


function Nav() {
    return <NavWrap>
        <Menu mode="inline" theme="dark">
            <Item><Link to="/">项目</Link></Item>
            <Item><Link to="/setting">设置</Link></Item>
        </Menu>
    </NavWrap>;
}


export default Nav;