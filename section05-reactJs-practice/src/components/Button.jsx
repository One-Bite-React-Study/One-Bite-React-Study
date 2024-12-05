import React from 'react'

const Button = ({text = '', color = 'black', children, ...rest}) => {

  // children && console.log(children);  

  return (
    <button style={{color}}>
      {text} - {color.toUpperCase()}
      {children}
    </button>
  )
}

export default Button;