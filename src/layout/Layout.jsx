import React from 'react';
import Sidebar from '../components/Sidebar.jsx';

const Layout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flexGrow: 1, padding: '20px', marginLeft: '240px',}}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
