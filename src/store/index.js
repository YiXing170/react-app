import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
// console.log(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)  添加redux-devtool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
  applyMiddleware(thunk) // return function
));
// compose用来做函数的 compose(fn1, fn2, fn3) (...args) = > fn1(fn2(fn3(...args)))  应该是处理多中间件情况
export default store;