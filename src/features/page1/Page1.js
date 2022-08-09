import React, { useEffect } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';

const Page1 = () => {
  useEffect(() => {
    return () => {
      console.log('Unmounting page 1');
    };
  });

  // Programmatically Navigation using Hook
  const navigate = useNavigate();

  return (
    <div>
      <h2>Page1</h2>
      {/* // dihapus karena sudah ada outlet di navigation.js */}
      {/* <Link to="/">Back</Link> */}
      <button
        onClick={() => {
          navigate('child1-1');
        }}
      >
        Child1
      </button>
      <button
        onClick={() => {
          navigate('child1-2');
        }}
      >
        Child2
      </button>
      <Outlet />
    </div>
  );
};

export default Page1;
