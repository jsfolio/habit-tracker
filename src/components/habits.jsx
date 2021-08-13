import React, { Component } from 'react';
import Habit from './habit'
class Habits extends Component {
    state = {
        habits : [
            { id: 1, name: 'reading', count: 0},
            { id: 2, name: 'running', count: 0},
            { id: 3, name: 'coding', count: 0},
        ]
    }

    render() {
        return (
            <ul>
                {this.state.habits.map( item =>
                    <Habit key = {item.id} habit = {item} />
                        //{habit : {item}} 을 props로 하여 Habit 컴포넌트 호출
                )}
            </ul>
        );
    }
}

export default Habits;