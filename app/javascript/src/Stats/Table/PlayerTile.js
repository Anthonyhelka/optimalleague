import React from 'react';
import classes from './PlayerTable.module.css';

const PlayerTile = (props) => {
  return (
    <tr className={classes.row}>
      <td className={classes.cell}>{props.name}</td>
      <td className={classes.cell}>{props.teamName}</td>
      <td className={classes.cell}>{props.role}</td>
      <td className={classes.cell}>{props.kills}</td>
      <td className={classes.cell}>{props.deaths}</td>
      <td className={classes.cell}>{props.assists}</td>
      <td className={classes.cell}>{((props.kills + props.assists) / props.deaths).toFixed(2)}</td>
      <td className={classes.cell}>{props.gamesPlayed}</td>
      <td className={classes.cell}>{props.ier}</td>
    </tr>
  );
}

export default PlayerTile;
