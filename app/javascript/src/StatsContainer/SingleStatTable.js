import React, { Component } from 'react';

const SingleStatTable = (props) => {
  let players = props.players.map((player, index) => {
    return(
      <tr key={player.id}>
        <td>{player.name}</td>
        <td>{player.team.tag}</td>
        {props.value === 'Kills' && <td>{player.kills}</td>}
        {props.value === 'Assists' && <td>{player.assists}</td>}
        {props.value === 'KDA' && <td>{((player.kills + player.assists) / player.deaths).toFixed(2)}</td>}
        {props.value === 'IER' && <td>{player.ier}</td>}
      </tr>
    )
  });

  return (
    <table className='StatsContainer-SingleStatTable'>
      <tbody>
        <tr>
          <th>{props.value}</th>
          <th></th>
          <th></th>
        </tr>
        {players}
      </tbody>
    </table>
  );
}

export default SingleStatTable;
