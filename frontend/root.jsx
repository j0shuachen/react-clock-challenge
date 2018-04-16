import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';


class Root extends React.Component {
  render() {
    return(
      <div className='container'>
        <div className='title'>JOSH'S CLOCK</div>
        <Clock/>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root/>, document.getElementById('main'));
});
