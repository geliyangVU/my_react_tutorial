import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      count:0
    }
    this.handler=this.handler.bind(this)
    }

  handler(){
    this.setState(prevs => {
      return {
        count: prevs.count +1
      }
    })
  }

  render(){
    return (
      <div>
        <p>THis is the start of app</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.handler}>increment!</button>
      </div>
    )
  }
}

export default App;
