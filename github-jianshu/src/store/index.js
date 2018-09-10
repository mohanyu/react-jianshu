//compose 就是一个包装函数，可以向函数中传递很多的方法，传递到额方法会依次的执行
import { createStore, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(reducer,composeEnhancers(
    applyMiddleware(thunk),
)); //composeEnhancers平衡作用

export default store;

