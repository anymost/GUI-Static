import React, { Component } from 'react';
import ProgramNav from '../components/program/ProgramNav'
import PageNav from '../components/program/PageNav';


class Program extends Component {
    render() {
        return <div>
            <ProgramNav/>
            <PageNav/>
        </div>;
    }
}

export default Program;