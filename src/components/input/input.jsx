import React from 'react'
import styled from 'styled-components';
import { GRAY, LIGHTGRAY } from '../../const/colors';

const MyInput =styled.input`
    background-color:${props => props.color ||LIGHTGRAY};
    width: 199px;
    height: 33px;
    border-radius: 10px;
    border:none;
`

const Input = ({type,placeholder,onChange,name,color,value}) => {
    return ( 
        <MyInput
          placeholder={placeholder}
          type={type}
          onChange={onChange}
          color={color}
          name={name}
          value={value}
        />
     );
}
 
export default Input;