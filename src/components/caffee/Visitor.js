import React from 'react'
import { Route } from 'react-router-dom'

class Visitor extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      test: this.props.match.params.caffe_id,
      id: this.props.match.params.id
    };
  }
  componentDidMount(){
    console.log(this.props)
  }
  render(){
    return(
      <div>
        <h1>{this.state.test}</h1>
        <h2>{this.state.id}</h2>
      </div>
    )
  }
}
export default Visitor
