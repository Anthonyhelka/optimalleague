import React from 'react';
import classes from './Leaderboard.module.css';
import { Popup } from 'semantic-ui-react';

const Leaderboard = (props) => {
  let players = props.players.map((player, index) => {
    return(
      <tr className={classes.row} key={player.id}>
        <td className={classes.cell}>{player.name}</td>
        <td className={classes.cell}>{player.team.tag}</td>
        {props.stat === 'Kills' && <td className={classes.cell}>{player.kills}</td>}
        {props.stat === 'Assists' && <td className={classes.cell}>{player.assists}</td>}
        {props.stat === 'KDA' && <td className={classes.cell}>{((player.kills + player.assists) / player.deaths).toFixed(2)}</td>}
        {props.stat === 'IER' && <td className={classes.cell}>{player.ier}</td>}
      </tr>
    )
  });
  return (
    <table className={classes.table}>
      <thead className={classes.header}>
        <tr className={classes.headerRow}>
          {props.stat === 'IER' ? (<Popup content='Impact Efficiency Rating' basic inverted trigger={<th className={classes.headerCell}>{props.stat}</th>} />) : (<th className={classes.headerCell}>{props.stat}</th>)}
          <th className={classes.headerCell}></th>
          <th className={classes.headerCell}></th>
        </tr>
      </thead>
      <tbody className={classes.body}>
        {players}
      </tbody>
    </table>
  );
}

export default Leaderboard;
