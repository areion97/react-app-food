import React from 'react';

const RenderLeader = ({ leader }) => {
  return (
    <div>
      <h2>{leader.name}</h2>
      <p>{leader.designation}</p>
      <img src={leader.image} alt={leader.name} />
      <br />
      <p>{leader.description}</p>
    </div>
  );
};

export default RenderLeader;