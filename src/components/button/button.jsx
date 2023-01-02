import React from 'react'
import styled from 'styled-components';
import { LIGHTGRAY,GRAY } from '../../const/colors';


const MyButton = styled.button`
    width: 95px;
    height: 23px;
    border-radius: 10px;
    border: none;
    background-color:${props => props.color ||LIGHTGRAY};
    &:active {
    background-color: ${GRAY};
  }
`
const Button = ({text,onClick,color}) => {
    return ( 
        <MyButton onClick={onClick} color={color} type="button">{text}</MyButton>

     );
}
 
export default Button;