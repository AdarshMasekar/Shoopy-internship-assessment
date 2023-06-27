import React from 'react';
import logo from "../../utils/logo.svg"
import { Navbar,NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
 const Header = () => {
  return (  
   <div className="bg-[#152C8E]">
     <Navbar expand="md" className="w-9/12 mx-auto">
      <Nav justify="left">
        <NavbarBrand href="/">
            <img src={logo} alt="Logo" className='w-6' />
        </NavbarBrand>
        <NavItem>
          <NavLink className='link text-white' href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link text-white' href="/about">Finances</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link text-white' href="/contact">Send and Request</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link text-white' href="/login">Deals</NavLink>
        </NavItem>
        <NavItem className='active bg-[#26419A] rounded-full'>
          <NavLink className='link text-white' href="/signup">Activity</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link text-white' href="/settings">Settings</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className='link text-white' href="/profile">Help</NavLink>
        </NavItem>
      </Nav>
      <Nav justify="right">
      
      <NavItem>
          <NavLink className='link text-white' href="#"><box-icon name='bell' type='solid' color='#ffffff' ></box-icon></NavLink>
        </NavItem>

       <NavItem>
          <NavLink className='link text-white' href="#"><box-icon name='cog' type='solid' color='#ffffff' ></box-icon></NavLink>
        </NavItem>

        <NavItem>
          <NavLink className='link text-white' href="#">LOG OUT</NavLink>
        </NavItem>

      </Nav>
    </Navbar>
   </div>
  );
};

export default Header;
