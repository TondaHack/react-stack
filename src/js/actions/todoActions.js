import AppDispatcher from '../dispatcher/AppDispatcher';
import appConstants from '../constants/appConstants';

const todoActions = {
  addItem(item){
    AppDispatcher.handleAction({
      actionType: appConstants.ADD_ITEM,
      data: item
    });
  },
  removeItem(index){
    AppDispatcher.handleAction({
      actionType: appConstants.REMOVE_ITEM,
      data: index
    })
  }
};

export default todoActions;
