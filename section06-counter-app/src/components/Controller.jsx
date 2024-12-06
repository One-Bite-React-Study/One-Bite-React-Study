import React from 'react';

export const Controller = ({onClickButton}) => {

  const values = [ -1, -10, -100, 100, 10, 1];

  return (
    <div>
      {
        values.map((value, i)=>
          <button key={i} onClick={onClickButton(value)}>{value}</button>
        )
      }
    </div>
  );
};
