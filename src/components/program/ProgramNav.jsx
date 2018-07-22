import React from 'react';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import { BuildRunningIcon, InstallingIcon } from './ProgramNav.style';
import CreateModal from './dialog/CreateModal';
import ProgramList from './ProgramList';
import { changeProgramRunStatus, changeProgramBuildStatus, changeProgramInstallStatus }
from '../../store/actions/program';
import { GLOBAL_RENDERER } from '../../constant';
const {
    ProgramCreate,
    DirectorySelectStart,
    DirectorySelectDone,
    ProgramInstall,
    ProgramInstallStatus,
    ProgramRun,
    ProgramRunStatus,
    ProgramBuild,
    ProgramBuildStatus
} = window.require(GLOBAL_RENDERER);




class ProgramNav extends React.Component {
    state = {
        isModalShow: false,
        programName: '',
        path: ''
    };

    handleClick = ({key}) => {
        switch (key) {
            case '1':
                this.changeModalDisplay(true);
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
                break;
        }
    };

    changeModalDisplay = (display) => {
        this.setState({
            isModalShow: display
        });
    };

    setProgramName = (event) => {
        this.setState({
            programName: event.target.value
        })
    };

    selectDirectory = () => {
        DirectorySelectStart();
    };

    removePath = () => {
        this.setState({
            path: ''
        })
    };

    cancelCreate = () => {
        this.changeModalDisplay(false);
        this.setState({
            path: '',
            programName: ''
        })
    };

    createProgram = () => {
        ProgramCreate({
            path: this.state.path,
            name: this.state.programName
        });
        this.cancelCreate();
    };

    render() {
        const { programStatus: { installStatus, runStatus, buildStatus }} = this.props;
        return <div>
            {   this.state.isModalShow &&
                <CreateModal programName={this.state.programName} path={this.state.path}
                    setProgramName={this.setProgramName} selectDirectory={this.selectDirectory}
                    removePath={this.removePath} onCancel={this.cancelCreate} onOk={this.createProgram}
                />
            }
            <Menu mode="horizontal" onClick={this.handleClick}>
                <Menu.Item key="0" style={{width: '220px'}}>
                    当前项目 <ProgramList/>
                </Menu.Item>
                <Menu.Item key="1">
                    <Icon type="profile"/>创建项目
                </Menu.Item>
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
            </Menu>
        </div>;
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

        DirectorySelectDone(path => {
            this.setState({ path });
        });
    }
}


export default connect(
        ({ programStatus }) => ({ programStatus }),
        { changeProgramRunStatus, changeProgramBuildStatus, changeProgramInstallStatus}
    )(ProgramNav);