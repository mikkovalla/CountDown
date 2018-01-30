import React, { Component } from 'react'
import './App.css'

//Clock component to show and calculate time remaining
class Clock extends Component {
constructor(props) {
  super(props)
  this.state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }
  //console.log("props :", this.props)
}

componentWillMount() {
  this.getTimeUntil(this.props.deadline)
}

componentDidMount() {
  setInterval(() => this.getTimeUntil(this.props.deadline), 1000)
}

//prefix 0 if clock is 1 digit
leading0(num) { 
  return num < 10 ? '0' + num : num
}
//function to calculate remaining time to deadline... thanks you stackoverflow...
  getTimeUntil (deadline) {

    //const for total time
    const time = Date.parse(deadline) - Date.parse(new Date())
    //console.log("time", time)
    //const for seconds
    const seconds = Math.floor((time/1000) % 60)
    //console.log("seconds:", seconds)
    //const for minutes
    const minutes = Math.floor((time/1000/60) % 60)
    //console.log("minutes:", minutes)
    //const for hours
    const hours = Math.floor(time/(1000*60*60) % 24)
    //console.log("hours:", hours)
    //const for days
    const days = Math.floor(time/(1000*60*60*24))
    //console.log('days', days, 'hours', hours, 'minutes', minutes, 'seconds', seconds)

    //day: days, hours: hours, minutes: minutes, seconds: seconds
    this.setState({days, hours, minutes, seconds})
  }

  render () {
    return (
      <div>
          <div className="Clock-days">{this.leading0(this.state.days)} days</div>
          <div className="Clock-hours">{this.leading0(this.state.hours)} hours</div>
          <div className="Clock-minutes">{this.leading0(this.state.minutes)} minutes</div>
          <div className="Clock-seconds">{this.leading0(this.state.seconds)} seconds</div>
      </div> 
    )    
  }
}

export default Clock