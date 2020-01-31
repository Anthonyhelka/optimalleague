import React, { Component } from 'react';

const SingleStatTable = (props) => {
  let players = props.players.map((player, index) => {
    return(
      <tr className='StatsContainer-SingleStatTable-row' key={player.id}>
        <td id='StatsContainer-SingleStatTable-name-cell'>{player.name}</td>
        <td id='StatsContainer-SingleStatTable-team-cell'>{player.team.tag}</td>
        {props.value === 'Kills' && <td id='StatsContainer-SingleStatTable-value-cell'>{player.kills}</td>}
        {props.value === 'Assists' && <td id='StatsContainer-SingleStatTable-value-cell'>{player.assists}</td>}
        {props.value === 'KDA' && <td id='StatsContainer-SingleStatTable-value-cell'>{((player.kills + player.assists) / player.deaths).toFixed(2)}</td>}
        {props.value === 'IER' && <td id='StatsContainer-SingleStatTable-value-cell'>{player.ier}</td>}
      </tr>
    )
  });

  return (
    <table id='StatsContainer-SingleStatTable'>
      <tbody id='StatsContainer-SingleStatTable-body'>
        <tr id='StatsContainer-SingleStatTable-header'>
          <th id='StatsContainer-SingleStatTable-name-column'>{props.value}</th>
          <th id='StatsContainer-SingleStatTable-team-column'></th>
          <th id='StatsContainer-SingleStatTable-value-column'></th>
        </tr>
        {players}
      </tbody>
    </table>
  );
}

export default SingleStatTable;
