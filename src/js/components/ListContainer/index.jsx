import React from 'react';
import AddItem from './../AddItem/index';
import List from './../List/index';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from '../../actions';

const ListContainer = ({todos, deleteTodo, addTodo}) => {
    return (
        <div className='col-sm-6 col-md-offset-3'>
            <div className='col-sm-12'>
                <h3 className='text-center'> Todo List </h3>
                <AddItem add={addTodo}/>
                <List items={todos} remove={deleteTodo}/>
            </div>
        </div>
    );
};

ListContainer.propTypes = {
    deleteTodo: React.PropTypes.func.isRequired,
    addTodo: React.PropTypes.func.isRequired,
    todos: React.PropTypes.object.isRequired
};


export default connect(
    function mapStateToProps(state) {
        return {
            todos: state
        };
    },

    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            deleteTodo: id => dispatch(deleteTodo(id))
        };
    }
)(ListContainer);
