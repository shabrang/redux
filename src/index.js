import React from 'react'
import ReactDOM from 'react-dom'

import { createStore } from 'redux'
import Counter from './component/counter'
import counter from './reducer'

const store = createStore(counter)    //state updated

const render = () => ReactDOM.render(
  <Counter
    value={store.getState()}
    Increment={() => store.dispatch({ type: 'INCREMENT' })}
    Decrement={() => store.dispatch({ type: 'DECREMENT' })}
  />
  , document.getElementById('root'))

render()

store.subscribe(render)
