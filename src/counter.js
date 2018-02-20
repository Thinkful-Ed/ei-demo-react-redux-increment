import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {
    return <div className="counter">Count: {props.counter}</div>;
}

const mapStateToProps = (state, props) => ({
    counter: state.count
});

export default connect(mapStateToProps)(Counter);
