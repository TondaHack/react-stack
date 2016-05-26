import React from 'react';
import AddItem from './../AddItem/index';
import List from './../List/index';
import { connect } from 'react-redux'
import { addTodo, deleteTodo } from '../../actions';

export class ListContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {todos, deleteTodo, addTodo} = this.props;

        return (
            <div className="col-sm-6 col-md-offset-3">
                <div className="col-sm-12">
                    <h3 className="text-center"> Todo List </h3>
                    <AddItem add={addTodo}/>
                    <List items={todos} remove={deleteTodo}/>
                </div>
            </div>
        )
    }
}

export default connect(
    function mapStateToProps(state) {
        return { todos: state };
    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            deleteTodo: id => dispatch(deleteTodo(id))
        };
    }
)(ListContainer);
