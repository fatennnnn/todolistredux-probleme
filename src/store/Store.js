import { createStore } from 'redux'
import Todoreducer from '../reducer/Reducer.js'

export const store = createStore(Todoreducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())