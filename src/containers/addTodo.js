import { connect } from 'react-redux'
import Todo from '../components/todo.js'
import {showTodoDispatch} from '../action/index.js'

const mapStateToProps = (state, ownProps) => {
    return {
      acitve: ownProps.children === state.showTodo,
      children: ownProps.children
    }
  }

const mapDispatchToProps = dispatch => {
    return {
      onTodoClick: content => {
      dispatch(showTodoDispatch(content))
    }
  } 
}

const AddTodo = connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo)

export default AddTodo