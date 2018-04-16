import React from 'react';

class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hrs: 0,
      mins: 0,
      secs: 0
    };
    this.setUp = this.setUp.bind(this);
    this.tick = this.tick.bind(this);

  }

  componentDidMount(){
    this.setUp();
    setInterval(() => this.tick(), 1000);

  }

  setUp(){
    let time = new Date();
    let hrs = time.getHours();
    let mins = time.getMinutes();
    let secs = time.getSeconds();
    this.setState({hrs, mins, secs});
  }

  tick(){
    let hrs = this.state.hrs;
    let mins = this.state.mins;
    let secs = this.state.secs;

    if(secs < 59){
      secs += 1;
    }else{
      secs = 0;
      if(mins < 59){
        mins += 1;
      }else{
        mins = 0;
        if(hrs < 23){
          hrs +=1;
        }else{
          hrs = 0;
        }
      }
    }
    this.setState({hrs, mins, secs});
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
