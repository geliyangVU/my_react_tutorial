import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      count:0
    }
    this.handler=this.handler.bind(this)
    this.handlerDecrement=this.handlerDecrement.bind(this)
    }

  handler(){
    this.setState(prevState => {
      return {
        count: prevState.count +1
      }
    })
  }

  handlerDecrement(){
    this.setState(prevState=>{
      return{
        count:prevState.count-5
      }
    })
  }

  render(){
    return (
      <div>
        <p>THis is the start of appsdfsdfs</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.handler}>Increment!</button>
        <button onClick={this.handlerDecrement}>Decrement!</button>
      </div>
    )
  }
}

export default App;
