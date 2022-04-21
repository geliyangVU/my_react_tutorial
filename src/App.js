import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state={
      count : 0
    }
    this.handleClick = this.handleClick.bind(this)
  }


  handleClick(){
    this.setState(prevState => {
      return  {
        count: prevState+1
      }
    })
  }

  render(){
    return (
      <div>
        <p>THis is the start of app</p>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick()}>change!</button>
      </div>
    )
  }
}

export default App;
