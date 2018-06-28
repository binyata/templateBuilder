import React from 'react'

class Todo extends React.Component {
  render() {
    return (
      <div>
        <h2>Things to do next time:</h2>
        <ul>
          <li>Css Design for Fun website</li>
          <li>Make Frontend compatable with Docker</li>
          <li>Add redux</li>
        </ul>
      </div>
    )
  }
}

export default Todo
