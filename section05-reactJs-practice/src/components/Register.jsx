import React, { useEffect, useState } from 'react';

// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

export const Register = () => {

  const [name, setName] = useState('이름');
  const [birth, setBirth] = useState('');
  const [country, setCountry] = useState('');
  const [bio, setBio] = useState('');

  
  useEffect(() => {
    console.log(bio);
  }, [bio]);


  const onChangeName = ({ target: { value } }) => setName(value);

  const onChangeBirth = ({ target: { value } }) => setBirth(value);

  const onChangeCountry = ({ target: { value } }) => setCountry(value);
  
  const onChangeBio = ({ target: { value } }) => setBio(value);
  

  return (
    <div>
      <div>
        <input value={name} onChange={onChangeName} placeholder={'이름'} />
      </div>

      <div>
        <input value={birth} onChange={onChangeBirth} type="date" />
      </div>

      <div>
        <select value={country} onChange={onChangeCountry}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={bio} onChange={onChangeBio}></textarea>
      </div>

    </div>
  );
};
