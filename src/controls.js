import React from 'react';

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
                    onClick={() => console.log(this.amount.value)}>
                    Increment
                </button>
                <button
                    type="button"
                    onClick={() => console.log(this.amount.value)}>
                    Decrement
                </button>
            </form>
        );
    }
}
