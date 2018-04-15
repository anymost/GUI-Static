import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom';
import { Icon } from 'antd';



export const NavWrap = styled.ul`
    width: 120px;
    height: 100vh;
    background-color: #FFF;
    border-right: 1px solid rgb(235, 237, 240);
`;

export const NavItem = styled.li`
    padding: 15px 0;
    margin: 0 4px;
    color: rgba(0,0,0,.65);
    text-align: center;
    &:hover{
        color: #1890ff;
    }
`;

export const LinkWrap = styled(Link)`
    text-decoration: none;
    color: inherit;
`;

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const ProgramLogo = styled.div`
    width: 80px;
    height: 80px;
    margin: 20px;
    & > img{
        animation: ${rotate} 4s linear infinite;
    }
`;


export const IconWrap = styled(Icon)`
    display: inline-block;
    height: 10%;
    width: 10px;
    margin-right: 10px;
`;