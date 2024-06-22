import React, { Component } from 'react';
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { actionCreators } from "./store";
import {
  LoginWrapper,
  LoginBox,
  Input,
  Botton,
  Loginfail,
  Logintitle
} from './styled'

class Login extends Component {
  render() {
    const { loginstate, loginfailstate } = this.props;
    if (!loginstate) {
      return (
        <LoginWrapper>
          <LoginBox>
            <Logintitle>登入</Logintitle>
            <Input placeholder='帳號' ref={(input) => { this.account = input }} />
            <Input placeholder='密碼' ref={(input) => { this.password = input }} type='password' />
            <Botton onClick={() => this.props.login(this.account, this.password)}>確認</Botton>
            {loginfailstate ? <Loginfail>登入失敗</Loginfail> : null}
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Navigate to='/' />
    }
  }
}

const mapStateToProps = (state) => ({
  loginstate: state.login.login,
  loginfailstate: state.login.loginfail
})

const mapDisptchToProps = (dispatch) => {
  return {
    login(accountelement, passwordelement) {
      dispatch(actionCreators.login(accountelement.value, passwordelement.value))
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Login);