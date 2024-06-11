import React from 'react';
import { RegisterFormWrapper, FormGroup, Label, Input, Button, ErrorMessage, Title } from "../Components/styled1"
import { useAuth } from "../../Data/AuthContext";
import { FaSignInAlt } from "react-icons/fa";
const Login = () => {
  const { formData, handleChange, handleLogin, errors } = useAuth();

  return (
    <RegisterFormWrapper>
      <Title>Login  <FaSignInAlt />  </Title>
      <form onSubmit={handleLogin}>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="text" id="email" name="email" value={formData.email} onChange={handleChange} placeholder='hello@busybuy.com' />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} placeholder='test123' />
        </FormGroup>
        <Button type="submit">  Login  </Button>
        {errors && <ErrorMessage>{errors}</ErrorMessage>}
      </form>
    </RegisterFormWrapper>
  );
};

export default Login;
