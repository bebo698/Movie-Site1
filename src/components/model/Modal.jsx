import React, { useEffect, useState,useRef } from 'react';
import propTypes  from 'prop-types';
// propTypes 
import './model.scss'
import { cleanup } from '@testing-library/react';

const Modal = props => {
    const [active,setActive]=useState(false);
    useEffect (()=>{
        setActive(props.active);

    },[props.active]);

    return (
        <div id={props.id} className={`model ${active ? 'active' :''}`}>
        {props.children}
        </div>
    );
};

Modal.propTypes  = {
    active:propTypes .bool,
    id:propTypes .string
    
};

  export  const ModelContent = props => {
    const contentRef = useRef(null);
    const closeModel = () => {
        contentRef.current.parentNode.classList.remove('active');
        if (props.onclose) props.onclose();

    }
    return (
        <div ref={contentRef} className="model__content">
            {props.children}
            <div className="model__content__close" onClick={closeModel}>
                <i className='bx bx-x'> </i>
            </div>
        </div>
    )
}
ModelContent.propTypes  = {
    onclose:propTypes.func
}
//rscp
export default Modal;
 