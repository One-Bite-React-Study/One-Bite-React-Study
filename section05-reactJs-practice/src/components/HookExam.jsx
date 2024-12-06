import React from 'react'
import { useInput } from './../hooks/_index';

export const HookExam = () => {

  const { input, onChange } = useInput();
  const { input: input2, onChange: onChange2} = useInput();
  
  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  )
}
