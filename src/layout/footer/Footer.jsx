import React from 'react';
import blueBird from '../../assets/blue-origami-bird.png'; // Adjust the import path as needed

const Footer = () => {
  // Styles for the footer, list items, links, and list item images
  const footerStyle = {
    width: '100%',
    height: '18vh',
    backgroundColor: '#ffa000',
    color: '#234465',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  const listStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  };

  const listItemStyle = {
    display: 'inline-block',
    height: 'auto',
    marginRight: '2%',
    cursor: 'pointer',
    padding: '0.5%',
    margin: '0.1%',
    verticalAlign: 'top',
    textAlign: 'center', // Center the content inside each list item
  };

  const linkStyle = {
    color: '#234465',
    textDecoration: 'none',
    padding: '5px 10px', // Adjust padding for better spacing
    display: 'block',
    textAlign: 'center', // Center the text within each link
  };

  const listItemImageStyle = {
    width: '50px',
    height: '50px'
  };

  return (
    <footer style={footerStyle}>
      <ul style={listStyle}>
        {Array.from({ length: 10 }, (_, i) => (
          <li style={listItemStyle} key={i}>
            <a href={`#section${i + 1}`} style={linkStyle}>Going to {i + 1}</a>
          </li>
        ))}
        <li style={{ ...listItemStyle, marginLeft: 'auto' }}> {/* Ensure the bird logo stays on the right */}
          <img src={blueBird} alt="Blue Origami Bird" style={listItemImageStyle} />
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
