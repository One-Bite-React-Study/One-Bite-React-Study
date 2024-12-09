import React, { memo } from 'react'
import './Header.css'

{/* ❗️ 부모 컴포넌트인 <App/>컴포넌트의 상태 변화에 의해서 불필요한 리렌더링 되고 있는 상황 */}
const Header = () => {
  return (
    <div className='Header' >
      <h3>오늘은 📆</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  )
}

// * ♻️ 인수로 최적화 하려는 컴포넌트인 함수를 그대로 전달한다.
// 1. `memo()` 메서드는 인수로 받은 컴포넌트 함수를 `props`가 변경되지 않았을 때에는 리렌더링 하지 않도록 최적화해서 반환한다.
//  1.1. `memo()` 메서드로 최적화 된 컴포넌트는 자신이 받는 props가 바뀌지 않으면 다시는 리렌더링이 발생되지 않는다.
// 2. 반환된 최적화가 이루어진 컴포넌트를 내보낸다(export).
// export default memo(Header);
export const MemoizedHeader = memo(Header);

