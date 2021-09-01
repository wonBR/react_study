import React, {Component} from "react";

class R008_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        //constructor 다음으로 실행되는 함수 컴포넌트가 새로운 props를 받게 됐을 때 state를 변경해준다
        console.log('2. getDrivedStateFromProps Call : ' + props.prop_value);
        return {tmp_state: props.prop_value}
    }

    constructor(props) {// 생명주기 함수중 가장 먼저 실행되며, 처음 한번만 호출
        super(props);
        this.state = {}; //컴포넌트 내부에서 사용되는 변수(state)를 선언하고 부모 객체에서 전달받은 변수(props)를 초기화할 때 사용
        console.log('1. constructor Call');
    }

    componentDidMount() {//render()함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행
        //화면이 모두 그려진 후에 실행돼야하는 이벤트 처리, 초기화 등 가장 많이 활용되는 함수수
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
        this.setState({tmp_state2: true});
    }

    shouldComponentUpdate(props, state) {
        //컴포넌트의 props나 state를 변경
        console.log('6. shouldComponentUpdate Call / tmp_state2 = ' + state.tmp_state2);
        return state.tmp_state2; //return 값이 true인 경우 render() 함수 한번 더 호출
    }

    render(){
        console.log('3. render Call');
        return (
            <h2>[THIS IS SHOULDCOMPONENTUPDATE FUNCTION </h2>
        );
    }
}

export default R008_LifecycleEx;