import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import PropTypes from 'prop-types';

const Path = styled.span`
    display: inline-block;
    margin-top: 20px;
`;

const Close = styled(Icon)`
    color: rgb(150, 156, 175);
    display: inline-block;
    padding-left: 10px;
    cursor: pointer;
`;

function PathComponent({path, onRemove}) {
    return <React.Fragment>
        <Path>{path}</Path>
        <Close type="close" onClick={onRemove}/>
    </React.Fragment>;
}

PathComponent.propTypes = {
    path: PropTypes.string,
    onRemove: PropTypes.func
};

export default PathComponent;
