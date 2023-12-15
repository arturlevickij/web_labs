import React from 'react';
import { StyledHeader, Logo, Nav } from './Header.styled';
import logo from '../Photos/logo.svg'
import {NavLink} from "react-router-dom";

const Header = () => {
  return (
    <StyledHeader>
      <Logo>
        <img src={logo} alt="stone" />
      </Logo>
      <Nav>
          <div className="Nav">
              <div className="nav-element">
                  <NavLink exact to="/" activeClassName="selected">Home</NavLink>
              </div>
              <div className="nav-element">
                  <NavLink exact to="/catalog" activeClassName="selected">Catalog</NavLink>
              </div>
              <div className="nav-element">
                  <NavLink exact to="/cart" activeClassName="selected">Cart</NavLink>
              </div>
          </div>
      </Nav>
    </StyledHeader>
  );
};

export default Header;