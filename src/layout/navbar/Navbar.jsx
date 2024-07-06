import React from 'react';
import blueBird from '../../assets/blue-origami-bird.png'; // Adjust the import path as needed

const Navbar = () => {
  const navStyle = {
    width: '100%',
    height: '14vh',
    backgroundColor: '#234465',
    color: 'white',
    position: 'fixed',
    top: '0',
    borderBottom: '2px solid #ffa000',
    borderTop: '2px solid #ffa000'
  };

  const listItemStyle = {
    display: 'inline-block',
    height: 'auto',
    marginRight: '2%',
    cursor: 'pointer',
    padding: '0.5%',
    margin: '0.1%',
    verticalAlign: 'top'
  };

  const listItemImageStyle = {
    width: '50px',
    height: '50px',
    filter: 'invert(100%)', // Change the color of the image to white
  };

  const linkStyle = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <nav style={navStyle}>
      <ul>
        <li style={listItemStyle}>
          <img src={blueBird} alt="Blue Origami Bird" style={listItemImageStyle} />
        </li>
        {Array.from({ length: 10 }, (_, i) => (
          <li
            style={{
              ...listItemStyle,
              padding: '2%',
              marginTop: '1.5%',
              borderTop: '2px solid #ffa000'
            }}
            key={i}
          >
            <a href={`#section${i + 1}`} style={linkStyle}>Going to {i + 1}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
