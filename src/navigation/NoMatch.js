import React from 'react';
import { useNavigate } from 'react-router-dom';

const NoMatch = () => {
  const navigate = useNavigate();
  return (
    <div>
      I can not find your requested page
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Go Back
      </button>
    </div>
  );
};

export default NoMatch;
