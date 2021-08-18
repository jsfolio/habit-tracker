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

    handleIncrement = (propItem) => {
        const localHabits = [...this.state.habits];
        const index = localHabits.indexOf(propItem);
        localHabits[index].count++; //bad!!
        this.setState({ habits : localHabits })
    }

    handleDecrement = (propItem) => {
        const localHabits = [...this.state.habits];
        const index = localHabits.indexOf(propItem);
        const count = localHabits[index].count - 1;
        localHabits[index].count = count < 0 ? 0 : count;
        this.setState({ habits : localHabits })
    }
    handleDelete = (propItem) => {
        const localHabits = this.state.habits.filter( singleHabit => singleHabit.id !== propItem.id);
        this.setState({ habits : localHabits})
    }

    render() {
        return (
            <ul>
                {this.state.habits.map( singleHabit =>
                    <Habit
                    key = {singleHabit.id}
                    habit = {singleHabit}
                    onIncrement = {this.handleIncrement}
                    onDecrement = {this.handleDecrement}
                    onDelete = {this.handleDelete}
                    />
                )}
            </ul>
        );
    }
}

export default Habits;