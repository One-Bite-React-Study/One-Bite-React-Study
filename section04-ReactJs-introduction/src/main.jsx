import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// * `createRoot()`: 인자로 전달받은 HTML 요소를 React의 root로 만들어주는 역할
// -> HTML의 '#root'를 불러오고 있는 상태
createRoot(document.getElementById('root'))

// * `render()`: 인자로 전달한 컴포넌트를 렌더링
.render(
  <StrictMode>
    <App />
  </StrictMode>,
)
