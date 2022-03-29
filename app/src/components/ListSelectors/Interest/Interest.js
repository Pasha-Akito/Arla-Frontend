import React from 'react';

const Interest = (props) => {
  const { interest } = props;
  return (
    <div>
      <div>
        {interest.name} ({interest.bio})
      </div>
    </div>
  );
};

export default Interest;