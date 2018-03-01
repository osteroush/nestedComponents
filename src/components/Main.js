import React from 'react';

import Header from './Header';
import Body from './Body';


class Main extends React.Component{
  
    render(){
      const title = 'Some Title';
      const subtitle = 'a subtitle';
  
      return (
        <div>
          <Header title = {title} subtitle={subtitle} />
          { /* the similar name is irrelevant. anything that is within scope can be passed to a component */ }
          <Body /> 
        </div>
      );
    }
  }

  export default Main;