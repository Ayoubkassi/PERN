import styled from 'styled-components';

export const Button = styled.button`
  padding : 8px 17px;
  background-color : ${(props) => props.color};
  outline : none;
  border : none;
  color : white;
  cursor : pointer;

  &:hover {
        transform : scale(0.98);
    }

`;
