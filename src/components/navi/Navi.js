import React, { Component } from "react";
import { Nav, NavItem, NavLink } from 'reactstrap'


export default class Navi extends Component {
  render() {
    return (
      <div className="m-3">
        <Nav pills>
          <NavItem>
            <NavLink disabled>
              Northwind App
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink active href="/">Product List</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink  href="#">
              Disabled Link
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
