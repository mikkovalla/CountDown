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
  console.log("props :", this.props)
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
    console.log('days', days, 'hours', hours, 'minutes', minutes, 'seconds', seconds)

  }

  render () {
    this.getTimeUntil(this.props.deadline)
    return (
      <div>
          <div className="Clock-days">{this.state.days} days</div>
          <div className="Clock-hours">{this.state.hours} hours</div>
          <div className="Clock-minutes">{this.state.minutes} minutes</div>
          <div className="Clock-seconds">{this.state.seconds} seconds</div>
      </div> 
    )    
  }
}

export default Clock