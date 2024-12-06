import "./Main.css";
// JSX주의 사항
// 1. 중괄호 내부에는 js표현식만 가능 : 즉 값만 if for 안 됨 
// 2. 숫자, 문자열 , 배열 값만 랜더링 된다 
// 3. 모든 태그는 닫혀있어야 한다. 
// 4. 최상위 태그는  반드시 하나여만 한다. <main> 하나만 있는 거 처럼 
const Main = () =>{
    const user = {
        name:"이",
        isLogin: true,
    }
    if(user.isLogin){
        // 자바스크립트 예약어인 class로는 안되고 className으로 사용 
        return <div className="logout">log out</div>
    }else{
        return <div>login</div>
    }
    // return <>
    // {user.isLogin ? (<div>로그아웃</div>):(<div>로그인</div>)}
    // </>;
}
export default Main;