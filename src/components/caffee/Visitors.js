import React from 'react'
import { Link, Route } from 'react-router-dom'
// import Visitor from './Visitor'

class Visitors extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      caffe_id: props.match.params.caffe_id,
      visitors: [
        {
          name: 'test',
          id: 1
        },
        {
          name: 'test 2',
          id: 2
        },
        {
          name: 'test 3',
          id: 3
        }
      ]
    };
  }
  render(){
    return(
      <div>
        <h1>{this.state.test}</h1>
        <h2>{this.state.id}</h2>
        <ul>
          {
            this.state.visitors.map((visitor) =>
              <li key={visitor.id.toString()}>
                <Link to={`${this.props.match.url}/visitors/${visitor.id}`}>
                  {visitor.name}
                </Link>
              </li>
            )
          }
        </ul>
        <Route path='/caffee/:caffee_id/visitors/:id' component={Visitor}/>
      </div>
    )
  }
}

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
export default Visitors
