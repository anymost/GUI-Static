import React from 'react';
import PropTypes from 'prop-types'
import { Modal, Input, Button } from 'antd';
import PathComponent from './CreateModal.style';


function CreateModal(props) {
    return (<Modal visible={true} onOk={props.onOk} onCancel={props.onCancel}>
        <div style={{padding: '20px'}}>
            <Input value={props.programName}
                onChange={props.setProgramName}
                placeholder="请输入项目名"
            />
            {
                props.path ?
                <PathComponent path={props.path} onRemove={props.removePath}/> :
                <Button type="file" icon="folder" style={{marginTop: '20px'}}
                        onClick={props.selectDirectory}
                >
                    请选择安装目录
                </Button>
            }
        </div>
    </Modal>);
}

CreateModal.propTypes = {
    programName: PropTypes.string,
    path: PropTypes.string,
    setProgramName: PropTypes.func,
    selectDirectory: PropTypes.func,
    removePath: PropTypes.func,
    onCancel: PropTypes.func,
    onOk: PropTypes.func,
};

export default CreateModal;