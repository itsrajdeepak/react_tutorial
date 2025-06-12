import React, { Component } from 'react'

export default class UserList extends Component {
  render() {
    console.log(this.props)
    return (
      <>
      <h1>User list</h1>
      <p>{this.props.name}</p>
       <p>{this.props.email}</p>
      </>
    )
  }
}


