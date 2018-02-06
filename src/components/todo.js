import React, { Component } from 'react';

class Todo extends Component {
    render () {
        const { children, onTodoClick, acitve } = this.props;
        return (
            <span onClick={() => onTodoClick(children)} className={acitve? 'activeLi' : ''}>{children}</span>
        )
    }
}

export default Todo;