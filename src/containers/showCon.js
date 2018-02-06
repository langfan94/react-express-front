import { connect } from 'react-redux'
import Con from '../components/con.js'

const mapStateToProps = (state) => {
    return {
      con: state.showTodo
    }
  }


const ShowCon = connect(
  mapStateToProps
)(Con)

export default ShowCon