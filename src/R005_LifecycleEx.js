import React,{Component} from "react";

class R005_LifecycleEx extends Component{
    constructor(props) {// 생명주기 함수중 가장 먼저 실행되며, 처음 한번만 호출
        super(props);
        this.state = {}; //컴포넌트 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화할 때 사용
        console.log('1. constructor Call');
    }

    render(){
        console.log('3. render Call');
        return (
            <h2>[THIS IS CONSTRUCTOR FUNCTION </h2>
        );
    }
}

export default R005_LifecycleEx;