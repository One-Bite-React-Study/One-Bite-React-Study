import React, { useEffect } from 'react';

export const Even = () => {

  useEffect(()=>{
    
    // * Clearn Up 함수
    return () =>{
      console.log('UnMount!');      
    }
  }, [])


  return (
    <div>짝수입니다.</div>
  )
}
