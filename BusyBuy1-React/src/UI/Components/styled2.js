// styled2.js contains styling for the ProductList page (also CartItems page)

import styled from 'styled-components';
import Button from 'react-bootstrap/Button';

export const QuantityButton = styled(Button)`
  background-color: black !important;
  border-color: black !important;
  color: white !important;
`;

export const QuantityLabel = styled.span`
  font-style: italic;
  font-weight: bold;
`;

export const QuantityNumber = styled.span`
  font-weight: bold;
  font-size: 1.2em; 
`;
