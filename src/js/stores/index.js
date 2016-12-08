import { createStore } from 'redux';
import todos from '../reducers/index';

export default createStore(todos,
    window.devToolsExtension && window.devToolsExtension()
);
