import React, { Component } from 'react';
import { Select } from 'antd';
import { GLOBAL_RENDERER } from '../../constant';
const {
    CurrentProgramFetchStart,
    CurrentProgramFetchDone,
    CurrentProgramSetStart,
    CurrentProgramSetDone,
    ProgramListFetchStart,
    ProgramListFetchDone,
    ProgramInfo
} = window.require(GLOBAL_RENDERER);


class  ProgramList extends Component {

    state = {
        currentProgram: {
            name: '',
            path: ''
        },
        programList: [],
        test: ''
    };

    changeProgram = (path) => {
        let programName = '';
        this.state.programList.forEach(program => {
            if (path === program.path) {
                programName = program.name;
            }
        });
        CurrentProgramSetStart({
            path,
            name: programName
        });
    };


    render() {
        return <Select size="small" onChange={this.changeProgram}
           style={{width: '140px'}} value={this.state.currentProgram.path}
        >
            {this.state.programList.map((program) => {
                return <Select.Option value = {program.path} key={program.path}>
                    {program.name}
                </Select.Option>
            })}
        </Select>;
    }
    componentDidMount() {
        CurrentProgramFetchStart();
        ProgramListFetchStart();
        CurrentProgramFetchDone((info) => {
            this.setState({
                currentProgram: info
            });
        });
        CurrentProgramSetDone((info) => {
            this.setState({
                currentProgram: info
            });
        });
        ProgramListFetchDone((info) => {
            this.setState({
                programList: info
            });
        });

        ProgramInfo((info) => {
            console.log(info);
            this.setState({
                currentProgram: info.current,
                programList: info.list
            });
        });

    }

    componentWillUnmount() {
        CurrentProgramFetchDone(null, true);
        CurrentProgramSetDone(null, true);
        ProgramListFetchDone(null, true);
        ProgramInfo(null, true);
    }
}

export default ProgramList;