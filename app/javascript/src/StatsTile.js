import React, { Component } from 'react';

const StatsTile = (props) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.teamName}</td>
      <td>{props.kills}</td>
      <td>{props.deaths}</td>
      <td>{props.assists}</td>
      <td>{((props.kills + props.assists) / props.deaths).toFixed(2)}</td>
    </tr>
  );
}

export default StatsTile;
