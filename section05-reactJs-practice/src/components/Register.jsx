import React, { useEffect, useState } from 'react';

// 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

export const Register = () => {
  // * 비슷한 여러 개의 state가 있을 때 하나의 객체값으로 묶어서 하나의 state로 통합해서 관리해준다.
  const [userInfo, setUserInfo] = useState({
    name: '이름',
    birth: '',
    country: '',
    bio: '',
  });

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);

  // * 비슷한 이벤트 핸들러를 통합 이벤트 핸들러로 묶어준다.
  const onChangeUserInfo = ({ target: { value, name } }) =>
    setUserInfo({
      ...userInfo,
      [name]: value,
    });

  return (
    <div>
      <div>
        <input value={userInfo['name']} name="name" onChange={onChangeUserInfo} placeholder={'이름'} />
      </div>

      <div>
        <input value={userInfo['birth']} name="birth" onChange={onChangeUserInfo} type="date" />
      </div>

      <div>
        <select value={userInfo['country']} name="country" onChange={onChangeUserInfo}>
          <option></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>

      <div>
        <textarea value={userInfo['bio']} name="bio" onChange={onChangeUserInfo}></textarea>
      </div>
    </div>
  );
};
