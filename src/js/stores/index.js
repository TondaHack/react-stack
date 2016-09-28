import { createStore } from 'redux';
import todos from '../reducer/index';

export default createStore(todos,
    window.devToolsExtension && window.devToolsExtension()
);
