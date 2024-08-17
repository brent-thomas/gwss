import React from 'react';

const Loader = () => {
  const loaderStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
  };

  const spinnerStyle = {
    border: '8px solid rgba(0, 0, 0, 0.1)',
    borderTop: '8px solid #a52a2a', // Spinner color
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    animation: 'spin 1.2s linear infinite',
  };

  return (
    <div style={loaderStyle}>
      <div style={spinnerStyle}></div>
      <style>
        {`
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
};

export default Loader;
