import './App.css'
import Header  from './components/Header'; // 파일을 찾아가도록 내부적으로 자동 설정이 되어 있으므로 확장자 생략 가능
import Main from './components/Main';
import Footer from './components/Footer';


// * Root Component
function App() {  

  return (
    <>
    {/* 자식 컴포넌트 */}
      <Header/>      
      <Main/>
      <Footer/>            
    </>
  )
}

export default App;
