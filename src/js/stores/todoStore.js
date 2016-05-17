import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/appConstants';
import EventEmitter from 'events';
import localStorage from './../libs/local-storage';

const CHANGE_EVENT = 'change';
const lsKey = 'TODO_LIST';

class TodoStore extends EventEmitter {

    constructor (props) {
        super();
        this.list = localStorage.get(lsKey) || [];
    }

    addChangeListener(callback){
        this.on(CHANGE_EVENT, callback);
    }

    removeChangeListener(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

    emitChange() {
        this.emit(CHANGE_EVENT);
    }

    addItem(item){
        this.list.push(item);
        this.saveLs();
    }

    getList(){
        return this.list;
    }

    saveLs(){
        let data = {};
        data[lsKey] = this.list;

        localStorage.set(data)
    }

    removeItem(index){
        this.list.splice(index, 1);
        this.saveLs();
    }

}

let todoStoreInstance = new TodoStore();

todoStoreInstance.dispatchToken = AppDispatcher.register(payload => {
    const action = payload.action;

    switch (action.actionType) {
        case appConstants.ADD_ITEM:
            todoStoreInstance.addItem(action.data);
            break;
        case appConstants.REMOVE_ITEM:
            todoStoreInstance.removeItem(action.data);
            break;
        default:
            return true;
    }
    todoStoreInstance.emitChange();
});

export default todoStoreInstance;



