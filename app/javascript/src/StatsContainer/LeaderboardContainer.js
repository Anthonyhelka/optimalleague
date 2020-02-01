import React from 'react';

const LeaderboardContainer = (props) => {
  let players = props.players.map((player, index) => {
    return(
      <tr id='LeaderboardContainer-player-row' key={player.id}>
        <td className='LeaderboardContainer-player-cell'>{player.name}</td>
        <td className='LeaderboardContainer-player-cell'>{player.team.tag}</td>
        {props.stat === 'Kills' && <td className='LeaderboardContainer-player-cell'>{player.kills}</td>}
        {props.stat === 'Assists' && <td className='LeaderboardContainer-player-cell'>{player.assists}</td>}
        {props.stat === 'KDA' && <td className='LeaderboardContainer-player-cell'>{((player.kills + player.assists) / player.deaths).toFixed(2)}</td>}
        {props.stat === 'IER' && <td className='LeaderboardContainer-player-cell'>{player.ier}</td>}
      </tr>
    )
  });
  return (
    <table id='LeaderboardContainer-table'>
      <thead id='LeaderboardContainer-header'>
        <tr id='LeaderboardContainer-header-row'>
          <th className='LeaderboardContainer-header-cell'>{props.stat}</th>
          <th className='LeaderboardContainer-header-cell'></th>
          <th className='LeaderboardContainer-header-cell'></th>
        </tr>
      </thead>
      <tbody id='LeaderboardContainer-body'>
        {players}
      </tbody>
    </table>
  );
}

export default LeaderboardContainer;
