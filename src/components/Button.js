import React from 'react'
import styled from 'styled-components'

const Btn = styled.button`
  font-family: 'Joystix';
  font-size: 16px;
  border: 3px solid #24252a;
  max-width: auto;
  padding: 7px 13px;
  display: table;
  margin: 20px auto 0;
  border-radius: 5px;
  background: #00e640;
  cursor: pointer;
  color: #24252a;
  
  &:hover {
    color: #00e640;
    background: #24252a;
  }
`;

export const Button = ({ text, ...rest }) => (
  <Btn {...rest}>{text}</Btn>
);

export default Button