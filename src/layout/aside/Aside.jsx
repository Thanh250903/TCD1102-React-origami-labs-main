import React from 'react';

const Aside = () => {
  const asideStyle = {
    display: 'inline-block',
    width: '15%',
    marginRight: '1%',
    height: '89.5vh',
    verticalAlign: 'top'
  };

  const listItemStyle = {
    display: 'block',
    width: '98%',
    borderLeft: '2px solid #234465',
    borderRight: '2px solid #234465',
    marginBottom: '11%',
    height: '5vh',
    textAlign: 'center'
  };

  const linkStyle = {
    color: '#234465',
    textAlign: 'center',
    textDecoration: 'none',
    paddingTop: '5%',
    height: '60%',
    display: 'block'
  };

  return (
    <aside style={asideStyle}>
      <ul>
        {Array.from({ length: 10 }, (_, i) => (
          <li style={listItemStyle} key={i}>
            <a href={`#section${i + 1}`} style={linkStyle}>Going to {i + 1}</a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Aside;
