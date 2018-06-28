import React from 'react'
import Layer from './Layer'
import Navigation from './Navigation'
import Todo from './Todo'

class Home extends React.Component {
  render() {
    return (
      <div>
        <Layer>
          <h2>Home Comp.</h2>
          <Navigation />
          <Todo />
        </Layer>
      </div>
    )
  }
}

export default Home
