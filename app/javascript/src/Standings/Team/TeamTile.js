import React, { Component } from 'react';
import classes from './TeamTile.module.scss';

const TeamTile = (props) => {
  return (
    <tr className={classes.row}>
      <td className={classes.cell}>{props.name}</td>
      <td className={classes.cell}>{props.tag}</td>
      <td className={classes.cell}>{props.wins}</td>
      <td className={classes.cell}>{props.losses}</td>
      <td className={classes.cell}><a className={classes.link} href={`https://na.op.gg/multi/query=${props.roster}`} target='_blank'>OP.GG</a></td>
    </tr>
  );
}

export default TeamTile;
