import React, { Component } from 'react';

class Con extends Component {
    render () {
        const { con } = this.props;
        return (
            <div>
                <span>welcome {con} to my web</span>
            </div>
            
        )
    }
}

export default Con;