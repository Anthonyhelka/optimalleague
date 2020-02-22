import React, { Component } from 'react';
import classes from './GroupContainer.module.scss';
import TeamTile from '../Team/TeamTile.js';

const GroupContainer = (props) => {
  let teams = props.teams.map(team => {
    return (
      <TeamTile
        key={team.id}
        name={team.name}
        tag={team.tag}
        wins={team.wins}
        losses={team.losses}
        roster={team.roster}
      />
    )
  });

  return (
    <div className={classes.container}>
      <span className={classes.title}>{props.name}</span>
      <table className={classes.table}>
        <thead className={classes.header}>
          <tr className={classes.headerRow}>
            <th className={classes.headerCell}>Team</th>
            <th className={classes.headerCell}>Tag</th>
            <th className={classes.headerCell}>Wins</th>
            <th className={classes.headerCell}>Losses</th>
            <th className={classes.headerCell}>Roster</th>
          </tr>
        </thead>
        <tbody className={classes.body}>
          {teams}
        </tbody>
      </table>
    </div>
  );
}

export default GroupContainer;
