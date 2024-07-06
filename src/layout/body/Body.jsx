import React from 'react';
import birdLogo from '../../assets/blue-origami-bird.png'; // Adjust the path as necessary

const Body = () => {
  const mainStyle = {
    display: 'inline-block',
    width: '83%',
    height: 'auto',
    marginBottom: '5%'
  };

  const headingStyle = {
    textAlign: 'center',
    color: '#234465',
    textDecoration: 'underline',
    marginBottom: '2%'
  };

  const postsStyle = {
    width: '100%',
    height: '45vh'
  };

  const postStyle = {
    width: '100%',
    height: 'auto',
    border: '1px solid #234465',
    marginBottom: '3%',
    borderRadius: '4px'
  };

  const descriptionStyle = {
    wordWrap: 'break-word',
    padding: '0.5%',
    fontStyle: 'italic',
    marginBottom: '0.5%',
    width: '95%',
    display: 'inline-block',
    verticalAlign: 'top'
  };

  const authorStyle = {
    height: 'auto',
    textAlign: 'right',
    marginBottom: '0.5%'
  };

  const authorSpanStyle = {
    textDecoration: 'underline',
    textAlign: 'right',
    paddingRight: '1%'
  };

  const imgStyle = {
    width: '32px',
    height: '32px'
  };

  return (
    <main style={mainStyle}>
      <h1 style={headingStyle}>Soooooooooome Heading</h1>
      <div style={postsStyle}>
        {Array.from({ length: 3 }, (_, i) => (
          <div style={postStyle} key={i}>
            <img src={birdLogo} alt="Bird Logo" style={imgStyle} />
            <div style={descriptionStyle}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. {`Post ${i + 1}`}</p>
            </div>
            <div style={authorStyle}>
              <span style={authorSpanStyle}>Author: Some Anonymous</span>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Body;
