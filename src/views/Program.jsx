import React, { Component } from 'react';


class Program extends Component {
    render() {
        return <div>
            {JSON.stringify(this.props.match)}
            {JSON.stringify(this.props.location)}
            {JSON.stringify(this.props.history)}
        </div>;
    }
}

export default Program;