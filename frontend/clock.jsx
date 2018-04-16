import React from 'react';

class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hrs: 0,
      mins: 0
    };
    this.setUp = this.setUp.bind(this);
  }

  componentDidMount(){
    this.setUp();
  }

  setUp(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    this.setState({hrs, mins});
  }

  tick(){
    let hrs = this.state.hrs;
    let mins = this.state.mins;
  }

  render() {
    console.log(this.state);

    return(
      <div className='clock-holder'>

      </div>
    );
  }

}

export default Clock;
