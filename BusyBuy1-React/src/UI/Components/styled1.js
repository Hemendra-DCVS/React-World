// This has styling for the Login page, Register Page and  Navbar component


import styled from 'styled-components';

export const NavbarWrapper = styled.nav`
  background-color: #ffffff;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

export const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  margin-right: 20px;
`;

export const NavLink = styled.a`
  color: #333;
  text-decoration: none;
  font-weight: 600;
  &:hover {
    color: #555;
  }
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

export const Spacer = styled.div`
  flex: 1;
`;

export const CartIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 10px;
`;

export const CartBadge = styled.span`
  background-color: #ff5722;
  color: #fff;
  font-size: 12px;
  border-radius: 50%;
  padding: 3px 6px;
  position: absolute;
  top: 5px;
  right: 5px;
`;

export const RegisterFormWrapper = styled.div`
  max-width: 400px;
  margin: 0 auto;
  border: 1px solid #ccc; /* Thin border */
  border-radius: 8px; /* Rounded corners */
  padding: 20px; /* Add some padding */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Materialistic shadow */
`;

export const FormGroup = styled.div`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
`;

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;


export const StyledNavLink = styled(NavLink)`
  color: #333;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px; /* Additional font size */
  margin-left: 20px; /* Additional margin for spacing */
  &:hover {
    color: #555;
  }
`;