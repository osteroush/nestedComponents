import React from 'react';

const Body = () => (
    <div className="contain">
        <div className="body">
            <p>I AM THE BODY COMPONENT</p>
        </div>
    </div>
  );


export default Body;
/*
exporting in this way means it must be imported this way:

import Body from './whereverItIs/Body';

when importing, it must be named what it is exported as.

in other words: export default George; => import George from '/whatever/whereverItLives/George";
*/ 