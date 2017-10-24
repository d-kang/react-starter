import React, { Component } from 'react';
import { connect } from 'react-redux';

let PingObservable = ({ isPinging, ping }) => {
  return (
    <div>
      <h1>is pinging: {isPinging.toString()}</h1>
      <button onClick={ping}>Start PING</button>
    </div>
  )
};


const PING = 'PING';
const PONG = 'PONG';

const ping = () => ({ type: PING });

// const mapState = ({ isPinging }) => ({ isPinging });
const mapState = (state) => {
  console.log('state', state)
  return {
    isPinging: state.foo.isPinging,
  }
};

export default connect(mapState, { ping })(PingObservable);
