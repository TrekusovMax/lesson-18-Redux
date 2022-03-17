import { applyMiddleware, createStore, compose } from 'redux'
import taskReduser from './task'
import { logger } from './middleware/logger';
import { thunk } from './middleware/thunk';

const middlewareEnhacer = applyMiddleware(logger, thunk)

function configureStore() {
  return createStore(taskReduser, compose(middlewareEnhacer,   
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))
}
export default configureStore
