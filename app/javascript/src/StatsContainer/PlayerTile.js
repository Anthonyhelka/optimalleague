import React from 'react';

const PlayerTile = (props) => {
  return (
    <tr id='PlayerTile-row'>
      <td className='PlayerTile-cell'>{props.name}</td>
      <td className='PlayerTile-cell'>{props.teamName}</td>
      <td className='PlayerTile-cell'>{props.role}</td>
      <td className='PlayerTile-cell'>{props.kills}</td>
      <td className='PlayerTile-cell'>{props.deaths}</td>
      <td className='PlayerTile-cell'>{props.assists}</td>
      <td className='PlayerTile-cell'>{((props.kills + props.assists) / props.deaths).toFixed(2)}</td>
      <td className='PlayerTile-cell'>{props.gamesPlayed}</td>
      <td className='PlayerTile-cell'>{props.ier}</td>
    </tr>
  );
}

export default PlayerTile;
