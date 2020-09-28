import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    console.log("constructor called")
    super(props);
    this.state = { name: "" };
  }
  static getDerivedStateFromProps(props, state) {
   console.log("getDerived called");
    return { name: props.name };
  }
  componentDidMount(){
    console.log("did mount called");
  this.setState({name:"babu"})
   }
  componentDidUpdate(){
  console.log("did update called");
  return null;
  }
  shouldComponentUpdate(props,state){
console.log("should update called")
    return true;
  }
  getSnapShotBeforeUpdate(props,state){
    console.log("snapshot called")
    return null;
  } 
     componentWillMount(){
    console.log("will mount called");
  }
  render() 
  {
    console.log("render called")
    return <h1>{this.state.name}</h1>;
  }
}

ReactDOM.render(<App name="Senchi" />, document.getElementById("root"));
