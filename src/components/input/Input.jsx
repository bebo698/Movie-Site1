import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';
const input = props => {
    return (
        <input type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange ? (e) => props.onChange(e):null }/>
            
      
    );
};



export default input;