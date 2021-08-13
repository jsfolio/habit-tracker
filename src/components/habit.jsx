import React, { Component } from 'react';

class Habit extends Component {
    state = { //state 멤버변수(오브젝트임)
        count: 0,
    }
    handleIncrement = (e) => {
        // setState에 객체를 전달하는 것과 함수를 전달하는 것은 어떤 차이가 있나요?
            // updater 함수를 전달하면 updater 함수 안에서 이전 state 값에 접근할 수 있습니다.
            // setState 호출은 일괄적으로 처리되기 때문에
            // 여러 업데이트 사항이 충돌 없이 차례대로 반영되도록 합니다.
        this.setState({
            // 중요: 값을 업데이트할 때 `this.state` 대신 `state` 값을 읽어옵니다.

            count: this.state.count+1
        })
    }

    handleDecrement = (e) => {
        const count = this.state.count - 1;
        this.setState({count: count < 0 ? 0 : count})
    }
    handleDelete = (e) => {

    }
    //-------------------------------------------------------------------------------
    render() {
        const { name, count } = this.props.habit;
        return (
            <li className="habit">
                <span className="habit-name">{name}</span>
                <span className="habit-count">{count}</span>
                <button className="habit-button habit-increase" onClick={this.handleIncrement}>
                    <i className="fas fa-plus-square"></i>
                </button>
                <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
                    <i className="fas fa-minus-square"></i>
                </button>
                <button className="habit-button habit-delete" onClick={this.handleDelete}>
                    <i className="fas fa-trash"></i>
                </button>
            </li>
        );
    }
}

export default Habit;