import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return(
      <div style={{backgroundColor:'gray',padding:'20px', top:'0px'}}>
          <NavLink  style={{padding: '20px',underline: 'none'}} to='/'>Home</NavLink>
          <NavLink  style={{padding: '20px'}} to='/movies'>MoviesList</NavLink>
          <NavLink  style={{padding: '20px'}} to='/products'>Products</NavLink>
          <NavLink  style={{padding: '20px'}} to='/about'>About</NavLink>
      </div>
  )
};

export default Nav;
