import React from 'react';

function WithListLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return (
      <div className='loading-container'>
        <p style={{ textAlign: 'center', fontSize: '30px' }}>
            Carregando Ofertas...
        </p>
      </div>
    );
  };
}
export default WithListLoading;
