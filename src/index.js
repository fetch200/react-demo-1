import React from 'react'
import ReactDOM from 'react-dom';
import './style.css'

function App() {
  return (<div className="App">
    爸爸
    <Son />
  </div >)
}

class Son extends React.Component {
  constructor() {
    super()
    this.state = { n: 100 }
  }
  add() {
    this.setState({ n: this.state.n + 1 })
  }
  render() {
    return (<div className="Son">
      儿子 n
      <div>{this.state.n}</div>
      <button onClick={() => this.add()}>+1</button>
      <Grandson />
    </div>)
  }
}

let Grandson = () => {
  let [n, setN] = React.useState(100)
  return (<div className="Grandson">
    孙子 n
    <div>{n}</div>
    <button onClick={() => setN(n + 1)}>+1</button>
  </div >)
}


ReactDOM.render(
  App(),
  document.getElementById('root')
);

