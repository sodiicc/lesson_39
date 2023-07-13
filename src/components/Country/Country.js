import React, { Component } from 'react'

class Country extends Component {

  onBtnClick() {
    this.props.setUser('Prorok')
  }
  render() {
    console.log('this.props', this.props)
    return (
      <div style={{color: 'red'}}>
        {this.props.userName}
        {this.props.userRole}
        <button onClick={() => this.props.getUser(6)}>GET USER CLASS</button>
      </div>
    )
  }
}
  
export default Country
