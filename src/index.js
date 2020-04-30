import React from 'react'
import ReactDOM from 'react-dom';
import './style.css'

function App() {
  return (<div className="App">
    爸爸
    <Son messageForSon='你好，儿子' />
    <Test />
    <Test2 />
  </div >)
}
class Test extends React.Component {
  constructor() {
    super()
    this.state = { n: 100 }
  }
  add() {
    this.setState({ n: this.state.n + 1 })
  }
  render() {
    return (<div className="test">
      n:{this.state.n}
      <button onClick={() => this.add()}>+1</button>
    </div>)
  }
}
let Test2 = () => {
  let [n, setN] = React.useState(100)
  return (<div className="test2">
    n:{n}
    <button onClick={() => setN(n + 1)}>+1</button>
  </div>)
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
    let age = 20
    return (<div className="Son">
      爸爸对我说「{this.props.messageForSon}」
      儿子 n
      <div>{this.state.n}</div>
      <button onClick={() => this.add()}>+1</button>
      <Grandson messageForGrandson={`你今年 ${age} 岁了`} />
    </div>)
  }
}

let Grandson = (props) => {
  let [n, setN] = React.useState(100)
  return (<div className="Grandson">
    爸爸对我说「{props.messageForGrandson}」
    孙子 n
    <div>{n}</div>
    <button onClick={() => setN(n + 1)}>+1</button>
  </div >)
}


ReactDOM.render(
  App(),
  document.getElementById('root')
);

