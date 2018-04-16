import React from 'react';

class Clock extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hrs: 0,
      mins: 0,
      secs: 0,
      ampm: ''
    };
    this.setUp = this.setUp.bind(this);
    this.tick = this.tick.bind(this);
    this.prettify = this.prettify.bind(this);
    this.adjustHrs = this.adjustHrs.bind(this);

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
    let ampm = hrs >= 12 ? 'pm' : 'am';
    this.setState({hrs, mins, secs, ampm});
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
    let ampm = hrs >= 12 ? 'pm' : 'am';
    this.setState({hrs, mins, secs, ampm});
  }

  prettify(time){
    if(time < 10){
      return `0${time}`;
    }else{
      return `${time}`;
    }
  }

  adjustHrs(hr){
    if(hr === 23 || hr === 0){
      return `${12}`;
    }
    if(hr > 12){
      let pretty = hr - 12;
      return `${hr - 12}`;
    }else{
      return `${hr}`;
    }

  }

  render() {
    console.log(this.state);
    let time = this.state;
    return(
      <div className='clock-holder'>

        <div className='hrs'>{this.prettify(this.adjustHrs(this.state.hrs))}</div>
        <div className='mins'>{this.prettify(this.state.mins)}</div>
        <div className='secs'>{this.prettify(this.state.secs)}</div>
        <div className='secs'>{this.state.ampm}</div>

      </div>
    );
  }

}

export default Clock;
