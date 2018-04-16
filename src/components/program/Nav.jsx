import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon, Modal, Input, Button } from 'antd';
import { BuildRunningIcon, InstallingIcon } from './Nav.style';
import { changeProgramRunStatus, changeProgramBuildStatus, changeProgramInstallStatus }
from '../../store/actions/program';
import { GLOBAL_RENDERER } from '../../constant';
const {
    ProgramCreate,
    ProgramInstall,
    ProgramInstallStatus,
    ProgramRun,
    ProgramRunStatus,
    ProgramBuild,
    ProgramBuildStatus
} = window.require(GLOBAL_RENDERER);


class Nav extends React.Component {
    state = {
        programName: ''
    };
    handleClick = ({key}) => {
        switch (key) {
            case '1':
                this.showCreateModal();
                break;
            case '2':
                ProgramInstall('start');
                break;
            case '3':
                ProgramInstall('stop');
                break;
            case '4':
                ProgramRun('start');
                break;
            case '5':
                ProgramRun('stop');
                break;
            case '6':
                ProgramBuild('start');
                break;
            case '7':
                ProgramBuild('stop');
                break;
            default:
                ProgramCreate();
                break;
        }
    };

    setProgramName = (event) => {
        console.log(event.target.value);
        this.setState({
            programName: event.target.value
        })
    };

    showCreateModal = () => {
        // ProgramCreate();
        const self = this;
        Modal.confirm({
            title: '创建项目',
            content: (
                <div>
                    <Input size="small" placeholder="请输入项目名" onChange={self.setProgramName}
                        value={self.state.programName}
                    />
                    <Button size="small">请选择文件夹</Button>
                </div>
            ),
            onOk() {
                if (self.state.programName) {
                    ProgramCreate(self.state.programName);
                    console.log(self.state.programName);
                }
            },
            onCancel() {
                self.setState({
                    programName: ''
                });
            }
        })
    };


    render() {
        const { programStatus: { installStatus, runStatus, buildStatus }} = this.props;
        return <Menu mode="horizontal" onClick={this.handleClick}>
            <Menu.Item key="1"><Icon type="profile"/>创建项目</Menu.Item>
            {   installStatus === 'stopped' ?
                <Menu.Item key="2"><Icon type="download"/>安装依赖</Menu.Item>:
                <Menu.Item key="3"><InstallingIcon type="download"/>停止安装</Menu.Item>
            }

            {
                runStatus === 'stopped' ?
                <Menu.Item key="4"><Icon type="play-circle"/>运行项目</Menu.Item> :
                <Menu.Item key="5"><Icon type="pause-circle" />停止运行</Menu.Item>
            }

            {
                buildStatus === 'stopped' ?
                <Menu.Item key="6"><Icon type="sync"/>编译项目</Menu.Item> :
                <Menu.Item key="7"><BuildRunningIcon type="sync"/>停止编译</Menu.Item>
            }
        </Menu>;
    }

    componentDidMount() {
        const {
            changeProgramRunStatus,
            changeProgramBuildStatus,
            changeProgramInstallStatus
        } = this.props;
        ProgramInstallStatus(status => {
            changeProgramInstallStatus(status);
        });
        ProgramRunStatus(status => {
            changeProgramRunStatus(status);
        });
        ProgramBuildStatus(status => {
            changeProgramBuildStatus(status);
        });

    }
}


export default connect(
        ({ programStatus }) => ({ programStatus }),
        { changeProgramRunStatus, changeProgramBuildStatus, changeProgramInstallStatus}
    )(Nav);