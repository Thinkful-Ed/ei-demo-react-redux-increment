import React from 'react';
import {connect} from 'react-redux';

function Counter(props) {
    return <div className="counter">Count: {props.counter}</div>;
}

export default connect()(Counter);
