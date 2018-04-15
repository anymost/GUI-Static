import React from 'react';
import { connect } from 'react-redux';
import { GLOBAL_RENDERER} from '../../constant';
import { cleanMessage, showMessage } from '../../store/actions/message';
import { message as messageShow } from 'antd';
const { HandleMessage, HandleError } = window.require(GLOBAL_RENDERER);



class Message extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        messageShow.config({
            duration: 3
        });
    }
    render() {
        return null;
    }
    static getDerivedStateFromProps(nextProps) {
        const { message: { type, content }, cleanMessage } = nextProps;
        if (type && content) {
            messageShow[type](content);
            setImmediate(() => cleanMessage());
        }
        return null;
    }
    componentDidMount() {
        const { showMessage } = this.props;
        HandleMessage(message => {
            showMessage(message);
        });
        HandleError(message => {
            showMessage(message);
        });
    }

}

export default connect(({message}) => ({message}),{ cleanMessage, showMessage })(Message);