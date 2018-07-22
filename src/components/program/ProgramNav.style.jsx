import styled, { keyframes } from "styled-components";
import { Icon } from 'antd';


const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(360deg);
    }
`;

export const BuildRunningIcon = styled(Icon)`
    animation: ${rotate} 4s linear infinite;
`;



const slide = keyframes`
    from{
        transform: translateY(0px);
    }
    to {
        transform: translateY(10px);
    }
`;

export const InstallingIcon = styled(Icon)`
    animation: ${slide} 4s linear infinite;
    height: 20px;
    overflow: hidden;
`;