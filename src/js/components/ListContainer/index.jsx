import React from 'react';
import AddItem from './../AddItem/index';
import List from './../List/index';
import {connect} from 'react-redux';
import {addTodo, deleteTodo} from '../../actions';
import {Grid} from 'react-mdl';

const ListContainer = ({todos, deleteTodo, addTodo}) => {
    return (
        <Grid>
            <AddItem add={addTodo}/>
            <List items={todos} remove={deleteTodo}/>
        </Grid>
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
