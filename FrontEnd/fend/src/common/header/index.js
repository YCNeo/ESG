import React, { Component } from "react";
import { connect } from "react-redux";
import { FaSearch } from "react-icons/fa";
import { actionCreators } from './store';
import { actionCreators as loginactionCreators } from '../../pages/login/store';
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  Logo,
  Nav,
  Navitem,
  Navsearch,
  Addition,
  Button,
  SearchWarpper,
  Searchinfo,
  Searchinfotitle,
  Searchinfoswitch,
  Searchinfoitem,
  Searchinfolist,
  ////////////
  Jumpbottom
} from './style';

class Header extends Component {
  getlistarea() {
    const { focused, list, page, totalpage, mousein, handlemouseenter, handlemouseleave, handlechangepage } = this.props;
    const pagelist = [];

    if (list.length) {
      for (let i = (page - 1) * 10; i < page * 10; i++) {
        pagelist.push(
          <Searchinfoitem key={list[i]}>{list[i]}</Searchinfoitem>
        )
      }
    }

    if (focused || mousein) {
      return (
        <Searchinfo
          onMouseEnter={handlemouseenter}
          onMouseLeave={handlemouseleave}
        >
          <Searchinfotitle>
            searchinfo
            <Searchinfoswitch onClick={() => handlechangepage(page, totalpage)}>Next Page</Searchinfoswitch>
            <Searchinfolist>{pagelist}</Searchinfolist>
          </Searchinfotitle>
        </Searchinfo>
      )
    }
    else {
      return null;
    }
  }

  state = {
    cheatpage: true
  };

  changecheatpage(cheatpage) {
    this.setState({ cheatpage: !cheatpage })
  }

  render() {
    const { focused, handleinputfocus, handleinputblur, list, login, logout } = this.props;
    const { cheatpage } = this.state;
    return (
      <div>
        {cheatpage ?
          <div>
            <HeaderWrapper>
              <Navitem>page list</Navitem>
              <Link to='/home' onClick={() => (this.changecheatpage(cheatpage))}><Logo /></Link>
              <Link to='/'><Jumpbottom>home</Jumpbottom></Link>
              {
                login ?
                  <Jumpbottom onClick={logout}>press to logout</Jumpbottom> :
                  <Link to='/login'><Jumpbottom>login</Jumpbottom></Link>
              }
              <Link to='/admin'><Jumpbottom>admin (need login)</Jumpbottom></Link>
            </HeaderWrapper>
          </div>
          :
          <HeaderWrapper>
            <div>
              <Navitem>hi</Navitem>
              <Link to='/' onClick={() => (this.changecheatpage(cheatpage))}><Logo /></Link>
              <Link to='/home'><Jumpbottom>home</Jumpbottom></Link>
            </div>
            <Nav>
              <Navitem className="left active">button1</Navitem>
              {
                login ?
                  <Navitem onClick={logout} className="right">登出</Navitem> :
                  <Link to='/login'><Navitem className="right">登入</Navitem></Link>
              }
              <Navitem className="right">button2</Navitem>
              <SearchWarpper>
                <Navsearch
                  className={focused ? 'focused' : ''}
                  onFocus={() => handleinputfocus(list)}
                  onBlur={handleinputblur}
                ></Navsearch>
                <i className={focused ? 'focused iconfont' : 'iconfont'}>
                  <FaSearch />
                </i>
                {this.getlistarea()}
              </SearchWarpper>
            </Nav>
            <Addition>
              <Link to='/admin'><Button className="color1">admin</Button></Link>
              <Button className="color2">test1</Button>
            </Addition>
          </HeaderWrapper >}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
    list: state.header.list,
    page: state.header.page,
    mousein: state.header.mousein,
    totalpage: state.header.totalpage,
    login: state.login.login
  }
}

const mapDisptchToProps = (dispatch) => {
  return {
    handleinputfocus(list) {
      (list.length === 0) && dispatch(actionCreators.getlist());
      dispatch(actionCreators.searchFocus());
    },
    handleinputblur() {
      dispatch(actionCreators.searchBlur());
    },
    handlemouseenter() {
      dispatch(actionCreators.mouseEnter());
    },
    handlemouseleave() {
      dispatch(actionCreators.mouseLeave());
    },
    handlechangepage(page, totalpage) {
      if (page < totalpage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout() {
      dispatch(loginactionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDisptchToProps)(Header);