import React from 'react'

const Button = ({text = '', color = 'black', children, ...rest}) => {

  const onClickButton = (e)=>{
    // SyntheticBaseEvent
    console.log(e);    
  }

  return (
    <button 
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}

export default Button;