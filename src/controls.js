import React from 'react';
import {connect} from 'react-redux';

import {increment, decrement} from './actions';

class Controls extends React.Component {
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
                        this.props.dispatch(
                            increment(parseInt(this.amount.value, 10))
                        )
                    }>
                    Increment
                </button>
                <button
                    type="button"
                    onClick={() =>
                        this.props.dispatch(
                            decrement(parseInt(this.amount.value, 10))
                        )
                    }>
                    Decrement
                </button>
            </form>
        );
    }
}

export default connect()(Controls);
