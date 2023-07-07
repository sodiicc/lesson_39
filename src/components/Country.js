import React, { Component } from 'react'
import { connect } from 'react-redux';
import { SET_USER_NAME } from '../store/actionTypes';

class Country extends Component {

  onBtnClick() {
    this.props.setUser('Prorok')
  }
  render() {
    return (
      <div style={{color: 'red'}}>
        {this.props.userName}
        {this.props.userRole}
        <button onClick={() => this.onBtnClick()}>SET USER in CLASS</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  //replace Reducer name with state.'Your Reducer name' and .property
        return {
          userName: state.user.name,
          userRole: state.user.role,
        };
      };
      const mapDispatchToProps = dispatch => {
        return {
          setUser: (payload) => {
            dispatch({
              type: SET_USER_NAME,
              payload
            });
          },
      };}
  
export default connect(mapStateToProps, mapDispatchToProps)(Country)
