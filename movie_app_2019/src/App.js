import React from "react";
import Potato from "./Potato";

class App extends React.Component{

  state = {
    isLoading:true,
    movies:[]
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({isLoading:false,book:true})
    },6000)
  }
  render() {
    const { isLoading } = this.state;
    return <div>
      {isLoading ? "Loading..." : "We are ready"}
      {/* js ternary operator : if true else */}
      </div> 
  }
}


export default App;
