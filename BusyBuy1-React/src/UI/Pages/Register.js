import React from 'react';
import { RegisterFormWrapper, FormGroup, Label, Input, Button, ErrorMessage, Title } from "../Components/styled1";
import { useAuth } from "../../Data/AuthContext";
import { FiUserPlus } from "react-icons/fi";
const Register = () => {
   
    const { formData, handleChange, handleRegister, errors } = useAuth();
   
    return (
    <RegisterFormWrapper>
      <form onSubmit={handleRegister}>
        <FormGroup>
        <Title>Register <FiUserPlus />  </Title>
          <Label htmlFor="username">Username</Label>
          <Input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="confirmPassword">Confirm Password</Label>
          <Input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
        </FormGroup>
        <Button type="submit">Register</Button>
        {errors && <ErrorMessage>{errors}</ErrorMessage>}
      </form>
    </RegisterFormWrapper>
  );
};

export default Register;
