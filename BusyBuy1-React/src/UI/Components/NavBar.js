import React from 'react';
import { NavbarWrapper, NavList, NavItem, Logo, Spacer, CartIcon, CartBadge, StyledNavLink } from "./styled1";
import shoppingCartIcon from  "./image.png";   // Import your shopping cart icon image here
import { Outlet } from 'react-router-dom';
import { NavLink as RRNavLink,useLocation } from 'react-router-dom';
import { useAuth } from '../../Data/AuthContext';

import { FaShoppingCart } from "react-icons/fa";
import { RiFileList3Fill } from "react-icons/ri";
import { AiFillProduct } from "react-icons/ai";
import { TbLogout } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { FaSignInAlt } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";
import { SiAboutdotme } from "react-icons/si";
const Navbar = () => {
  const { user, handleLogout } = useAuth();
  const location = useLocation();
  
  return (
    <>
   
    <NavbarWrapper>
      <NavList>
        <NavItem>
          <CartIcon src={shoppingCartIcon} alt="Shopping Cart" />
        </NavItem>  
        <NavItem>
          <Logo className=" non-copyable" >BusyBuy</Logo>
        </NavItem>
        

        
        
        

        {user ? (
            <>
      {!location.pathname.includes('/ProductList') && (
      <StyledNavLink as={RRNavLink} to="/ProductList" > <AiFillProduct />  Products</StyledNavLink>
      )}
      {!location.pathname.includes('/CartItems') && (
        <StyledNavLink as={RRNavLink} to="/CartItems" > <FaShoppingCart />  Cart  </StyledNavLink>
      )}
      {!location.pathname.includes('/OrderHistory') && (
        <StyledNavLink as={RRNavLink} to="/OrderHistory" > <RiFileList3Fill />  OrderHistory</StyledNavLink>
      )}


              <Spacer />
              <StyledNavLink to="/" style={{ color: "#007bff" }}><CgProfile />  {user.email}</StyledNavLink>
              <StyledNavLink as={RRNavLink} onClick={handleLogout} to="/login" style={{ color: "red" }}>Logout <TbLogout /> </StyledNavLink>
            </>
          ) : (
            <>
              <StyledNavLink as={RRNavLink} to="/register" style={
              ({isActive}) => (isActive?{color:"#007bff"} :null)
              }> <FiUserPlus /> Register  </StyledNavLink>
          
              <StyledNavLink as={RRNavLink} to="/login" style={
              ({isActive}) => (isActive?{color:"#007bff"} :null)
              } > <FaSignInAlt /> Login  </StyledNavLink>
            
              <StyledNavLink as={RRNavLink} to="/about"  style={
              ({isActive}) => (isActive?{color:"#007bff"} :null)
              }>  About <SiAboutdotme /> </StyledNavLink>
            <Spacer />
            </>
          )}
      </NavList>
    </NavbarWrapper>
    <Outlet />
    </>
  );
};

export default Navbar;
