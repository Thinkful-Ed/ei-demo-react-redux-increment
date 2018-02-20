import React from 'react';

import store from './store';
import {increment, decrement} from './actions';

export default class Controls extends React.Component {
    render() {
        return (
            <form onSubmit={e => e.preventDefault()}>
                <label htmlFor="amount">Amount</label>
                <input
                    id="amount"
                    type="number"
                    ref={input => (this.amount = input)}
                />
                <button
                    type="button"
                    onClick={() =>
                        store.dispatch(
                            increment(parseInt(this.amount.value, 10))
                        )
                    }>
                    Increment
                </button>
                <button
                    type="button"
                    onClick={() =>
                        store.dispatch(
                            decrement(parseInt(this.amount.value, 10))
                        )
                    }>
                    Decrement
                </button>
            </form>
        );
    }
}
