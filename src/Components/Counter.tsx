import React, { useContext, useReducer } from 'react';
import { themeContext } from './context/ThemeContext';

type CounterType = {
    count: number;
};
type ActionType = {
    type: 'increment' | 'decrement' | 'reset';
    payload?: number;
};
const Counter = () => {
    const { primary, secondary } = useContext(themeContext);
    const initialState = {
        count: 0,
    };

    const reducer = (state: CounterType, action: ActionType) => {
        switch (action.type) {
            case 'increment': {
                return { count: state.count + Number(action.payload) };
            }
            case 'decrement': {
                return { count: state.count - Number(action.payload) };
            }
            case 'reset': {
                return initialState;
            }
            default: {
                throw new Error('invalid');
            }
        }
    };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            counter : {state.count}
            <button
                style={{
                    color: primary.main,
                }}
                onClick={() => dispatch({ type: 'increment', payload: 1 })}
            >
                increment
            </button>
            <button
                onClick={() => dispatch({ type: 'increment', payload: -1 })}
            >
                deccrement
            </button>
            <button onClick={() => dispatch({ type: 'reset', payload: 0 })}>
                reset
            </button>
        </div>
    );
};

export default Counter;
