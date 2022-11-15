import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Square = styled.div`
  width: 100px;
  height: 100px;
  background: ${props => props.background}  
`;

export const Select = styled.select`
  margin: 40px;
  padding: 0px;
`;