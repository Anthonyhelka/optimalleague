import React, { Component } from 'react';

const TeamTile = (props) => {
  return (
    <div>
      <span>{props.name} ({props.wins}/{props.losses})</span>
    </div>
  );
}

export default TeamTile;
