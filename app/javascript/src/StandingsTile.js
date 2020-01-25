import React, { Component } from 'react';

const StandingsTile = (props) => {
  let players = props.players.map(player => { return (<li key={player.id}>{player.name}</li>) });
  return (
    <div>
      <p><b>{props.name}</b></p>
      <ul>{players}</ul>
    </div>
  );
}

export default StandingsTile;
