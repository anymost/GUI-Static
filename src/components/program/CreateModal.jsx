import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { Modal, Input, Button } from 'antd';
import PathComponent from './CreateModal.style';


class  CreateModal extends Component {
    static propTypes = {
        programName: PropTypes.string,
        path: PropTypes.string,
        setProgramName: PropTypes.func,
        selectDirectory: PropTypes.func,
        removePath: PropTypes.func,
        onCancel: PropTypes.func,
        onOk: PropTypes.func,
    };
    render() {
        return (<Modal visible={true} onOk={this.props.onOk} onCancel={this.props.onCancel}>
            <div style={{padding: '20px'}}>
                <Input value={this.props.programName}
                    onChange={this.props.setProgramName}
                    placeholder="请输入项目名"
                />
                {
                    this.props.path ?
                    <PathComponent path={this.props.path} onRemove={this.props.removePath}/> :
                    <Button type="file" icon="folder" style={{marginTop: '20px'}}
                            onClick={this.props.selectDirectory}
                    >
                        请选择安装目录
                    </Button>
                }
            </div>
        </Modal>);
    }
}

export default CreateModal;