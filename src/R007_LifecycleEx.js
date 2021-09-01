import React, {Component} from "react";

class R007_LifecycleEx extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('2. getDerivedStateFromProps Call :' + props.prop_value);
        return {tmp_state:props.prop_value}
    }

    constructor(props) {
        super(props);
        this.state = {};
        console.log('1. Constructor Call')
    }

    componentDidMount() {//render()함수가 return 되는 html 형식의 코드를 화면에 그려준 후 실행
        //화면이 모두 그려진 후에 실행돼야하는 이벤트 처리, 초기화 등 가장 많이 활용되는 함수수
        console.log('4. componentDidMount Call');
        console.log('5. tmp_state : ' + this.state.tmp_state);
    }

    render(){
        console.log('3. render Call');
        return (
            <h2>[THIS IS COMPONENTDIDMOUNT FUNCTION </h2>
        );
    }
}

export default R007_LifecycleEx;