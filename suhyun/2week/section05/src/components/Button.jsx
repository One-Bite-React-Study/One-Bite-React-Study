
// props 는 객체 
// 자식 요소들은 children이라는 요소로 들어가게 됨 안에 있는 태그들 같은 거
const Button = ({text, color ,children }) => {

    // 매개변수로 이벤트 객체를 제공 
    const onClickButton = (e) => {
        console.log(text);
        console.log(e);
    }

    return (
    <button
        //이벤트 핸들러 : onClick 함수 이름만 설정해주면 오케 
        onClick = {onClickButton}
        //onMouseEnter={onClickButton}
        style={{color: color}}>
        {text} - {color.toUpperCase()}
        {children} 
        </button>
    );
}
// 컬러 없는 경우 디폴트로 지정해준 이 값을 사용 
Button.defaultProps = {
    color: "black",
}


export default Button;