import React, { Component } from 'react';
import TeamTile from './TeamTile.js';

const GroupContainer = (props) => {
  let teams = props.teams.map(team => {
    return (
      <TeamTile
        key={team.id}
        name={team.name}
        tag={team.tag}
        wins={team.wins}
        losses={team.losses}
      />
    )
  });

  return (
    <div>
      <h1>{props.name}</h1>
      {teams}
    </div>
  );
}

export default GroupContainer;
