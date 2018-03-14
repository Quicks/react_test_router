import React from 'react'
import Visitors from './caffee/Visitors'
import { Switch, Route } from 'react-router-dom'

class Caffee extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
    };
  }
  componentDidMount(){
    this.setState({test: 'test'})
  }
  render(){
    return(
      <div>
        <h1>{this.state.test}</h1>
        <h2>{this.state.id}</h2>
        <Route path='/caffee/:id' component={Visitors} />
      </div>
    )
  }
}
export default Caffee
