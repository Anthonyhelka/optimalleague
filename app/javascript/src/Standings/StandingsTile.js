import React, { Component } from 'react';

const StandingsTile = (props) => {
  let players = props.roster.map(player => { return (<li key={player}>{player}</li>) });
  return (
    <div>
      <p><b>{props.name} ({props.wins}/{props.losses})</b></p>
      <ul>{players}</ul>
    </div>
  );
}

export default StandingsTile;
