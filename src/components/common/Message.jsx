import React from 'react';
import { connect } from 'react-redux';
import { cleanMessage } from '../../store/actions/message';
import { message as showMessage } from 'antd';


class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        showMessage.config({
            duration: 1
        });
    }
    render() {
        return null;
    }
    static getDerivedStateFromProps(nextProps) {
        const { message: { type, content }, cleanMessage } = nextProps;
        if (type && content) {
            showMessage[type](content);
            setImmediate(() => cleanMessage());
        }
        return null;
    }

}

export default connect(({message}) => ({message}),{ cleanMessage })(Message);