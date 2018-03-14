import React from 'react';

export default class Welcome extends React.Component {
  fullName(){
    return `${this.props.user.firstName} ${this.props.user.lastName}`
  }
  test(){
    return this.fullName();
  }
  user(){
    return 'User';
  }

  render() {
    return <h1>Hello, {this.user()}</h1>;
  }
}
