import React from 'react';

const Header = (props) => (
  <div className="contain">  
    <div className="header">
        
          <h1 className="header__title">{props.title}</h1>{/* props.whatever must match the name by which it was passed in */}
          <h2 className="header__subtitle">{props.subtitle}</h2>{/* props.whatever must match the name by which it was passed in */}

          <p>This is the Header Component</p>

      </div>
    </div>
  );


export default Header;
/*
exporting in this way means it must be imported this way: import Header from './whereverItIs';

when importing, it must be named what it is exported as.

in other words: export default George; => import George from '/whatever/whereverItLives";
*/ 