    import React, { useState } from 'react';
    import {BiShieldQuarter} from 'react-icons/bi'
    import './Navbar.css'
    import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
    } from 'reactstrap';
    
    function Navibar(args) {
      const [isOpen, setIsOpen] = useState(false);
    
      const toggle = () => setIsOpen(!isOpen);
    
      return (
         <div className='container'>
            <div className='row'>
              <div className='col-12'>  
          <Navbar {...args}>
            <NavbarBrand href="/">
             <BiShieldQuarter className="brand-icon" />  Bisnes
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="me-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/about">
                    About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/project">
                    Project
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        </div>
        </div>
      );

}

export default Navibar
