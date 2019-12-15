import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

const composeEnhancers = composeWithDevTools({
    name: 'Redux',
    realtime: true,
    trace: true,
    traceLimit: 20
  })

// Store
// Almacenamiento de nuestro estado
const store = createStore(rootReducer, 
    composeEnhancers(
    applyMiddleware(thunk))
)

export default store