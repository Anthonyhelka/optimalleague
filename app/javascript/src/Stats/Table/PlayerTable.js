import React from 'react';
import classes from './PlayerTable.module.scss';
import PlayerTile from './PlayerTile.js';
import { Icon, Popup } from 'semantic-ui-react';

const PlayerTable = (props) => {
  let players = props.players.map(player => {
    return (
      <PlayerTile
        key={player.id}
        name={player.name}
        teamName={player.team_id === null ? 'N/A' : player.team.name}
        role={player.role}
        kills={player.kills}
        deaths={player.deaths}
        assists={player.assists}
        gamesPlayed={player.games_played}
        ier={player.ier}
      />
    )
  });
  return(
    <table className={classes.table}>
      <thead className={classes.header}>
        <tr className={classes.headerRow}>
          <th className={classes.headerCell} onClick={event => props.handleSort(event, 'name')}>Name&nbsp;{props.sort === 'name' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
          <th className={classes.headerCell} onClick={event => props.handleSort(event, 'teamName')}>Team&nbsp;{props.sort === 'teamName' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
          <th className={classes.headerCell} onClick={event => props.handleSort(event, 'role')}>Role&nbsp;{props.sort === 'role' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
          <th className={classes.headerCell} onClick={event => props.handleSort(event, 'kills')}>Kills&nbsp;{props.sort === 'kills' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
          <th className={classes.headerCell} onClick={event => props.handleSort(event, 'deaths')}>Deaths&nbsp;{props.sort === 'deaths' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
          <th className={classes.headerCell} onClick={event => props.handleSort(event, 'assists')}>Assists&nbsp;{props.sort === 'assists' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
          <th className={classes.headerCell} onClick={event => props.handleSort(event, 'kda')}>KDA&nbsp;{props.sort === 'kda' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
          <th className={classes.headerCell} onClick={event => props.handleSort(event, 'gamesPlayed')}>Games&nbsp;{props.sort === 'gamesPlayed' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>
          <Popup content='Impact Efficiency Rating' trigger={<th className={classes.headerCell} onClick={event => props.handleSort(event, 'ier')}>IER&nbsp;{props.sort === 'ier' ? (<Icon name={`sort ${props.direction}`}/>) : (<Icon name={`sort`}/>)}</th>} />
        </tr>
      </thead>
      <tbody className={classes.body}>
        {players}
      </tbody>
    </table>
  );
}

export default PlayerTable;
