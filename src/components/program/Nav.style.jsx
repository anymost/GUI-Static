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

