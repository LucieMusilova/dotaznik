import React from 'react';
import Icon from '../Icon/index';
import './style.css';

const Option = ({type, text, show}) => {
  
  const handleClick = () => {
    show(type)
  };

  return(
    <div className="option" onClick={handleClick}>
      <Icon type={type} />
      <div>{text}</div>
    </div>
  )
  };

export default Option;