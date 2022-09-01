import React from 'react';
// import PropTypes from 'prop-types';
import './input.scss';
const Input = props => {
    return (
        <Input type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange ? (e) => props.onChange(e):null }
         />
            
      
    );
};



export default Input;