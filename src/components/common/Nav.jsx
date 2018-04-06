import React from 'react';
import { NavItem, NavWrap, LinkWrap, ProgramLogo, IconWrap} from "./NavStyle";
import logo from '../../logo.svg';



function Nav() {
    return <NavWrap>
        <ProgramLogo>
            <img src={logo} width="80px" height="80px"/>
        </ProgramLogo>
            <NavItem>
                <IconWrap type="book"/>
                <LinkWrap to="/">项目</LinkWrap>
            </NavItem>
            <NavItem>
                <IconWrap type="setting"/>
                <LinkWrap to="/setting">设置</LinkWrap>
            </NavItem>
    </NavWrap>;
}


export default Nav;