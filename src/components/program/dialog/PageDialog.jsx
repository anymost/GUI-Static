import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Input } from 'antd';
import { List, ListItem, ListItemTitle } from './PageDialog.style';


function PageDialog(props){
    return (<Modal visible={ true } width='640px' onOk={props.onSubmit} onCancel={props.onCancel}>
            <List>
                <ListItem>
                    <ListItemTitle>路由:</ListItemTitle>
                    <Input onChange={ event => props.setPath(event.target.value)}
                           value={props.path}
                    />
                </ListItem>
                <ListItem>
                    <ListItemTitle>组件名:</ListItemTitle>
                    <Input onChange={ event => props.setName(event.target.value)}
                           value={props.name}/>
                </ListItem>
            </List>
    </Modal>);
}

PageDialog.propTypes = {
    name: PropTypes.string,
    path: PropTypes.string,
    setPath: PropTypes.func,
    setName: PropTypes.func,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func
};

export default PageDialog;