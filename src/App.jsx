import React from 'react';
import Navbar from './layout/navbar/Navbar';
import Aside from './layout/aside/Aside';
import Body from './layout/body/Body';
import Footer from './layout/footer/Footer';

const App = () => {
  const appStyle = {
    textAlign: 'center'
  };

  const containerStyle = {
    display: 'flex',
    marginTop: '14vh' // Adjust to make space for the fixed navbar
  };

  return (
    <div style={appStyle}>
      <Navbar />
      <div style={containerStyle}>
        <Aside />
        <Body />
      </div>
      <Footer />
    </div>
  );
};

export default App;
