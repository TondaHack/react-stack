import constans from '../constants/appConstants';

export function addTodo(todo){
    return {
        type: constans.ADD_ITEM,
        todo
    };
}

export function deleteTodo(index){
    return {
        type: constans.REMOVE_ITEM,
        index
    };
}