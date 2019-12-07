import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import 'rc-time-picker/assets/index.css';
import moment from 'moment'
import TableHours from './Table.js'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      format: 'h:mm a',
      totalHours: 0,
      days: [],
      defaultStart: moment().hour(9).minute(0),
      defaultEnd: moment().hour(19).minute(0)
    };

    this.onChangeStart = this.onChangeStart.bind(this);
    this.onChangeEnd = this.onChangeEnd.bind(this);
    this.addRow = this.addRow.bind(this);
    this.calculateHours = this.calculateHours.bind(this);
    this.calculateTotalForDay = this.calculateTotalForDay.bind(this);
    this.displayHelp = this.displayHelp.bind(this);
    this.displayTable = this.displayTable.bind(this);
  }

  calculateDifferenceInDefaultHours() {
    var startTime = moment(this.state.defaultStart, 'h:mm a')
    var endTime = moment(this.state.defaultEnd, 'h:mm a')

    var duration = moment.duration(endTime.diff(startTime))
    var hours = duration.asHours()

    var hoursRounded = Math.round(hours * 10) / 10;

    return hoursRounded;
  }

  calculateHours() {
    var totalHoursInMonth = 0

    this.state.days.map((day) => (
      totalHoursInMonth += day.total
    ))

    this.setState({ totalHours: totalHoursInMonth })
  }

  calculateTotalForDay(index) {
    let days = [...this.state.days];
    var startTime = days[index].start
    var endTime = days[index].end

    var startDate = moment(startTime, 'h:mm a')
    var endDate = moment(endTime, 'h:mm a')

    var duration = moment.duration(endDate.diff(startDate));
    var hours = duration.asHours();

    var hoursRounded = Math.round(hours * 20) / 20;


    days[index].total = hoursRounded
  }

  onChangeStart(value, index) {
    // create the copy of state array
    let days = [...this.state.days];
    days[index].start = value.format(this.state.format);
    this.setState({ days: days }, () => { console.log("On Change Start", this.state) });

    this.calculateTotalForDay(index)
  }

  onChangeEnd(value, index) {
    // create the copy of state array
    let days = [...this.state.days];
    days[index].end = value.format(this.state.format);
    this.setState({ days: days }, () => { console.log("On Change End", this.state) });

    this.calculateTotalForDay(index)
  }

  addRow() {
    var day = {
      id: this.state.counter,
      start: this.state.defaultStart,
      end: this.state.defaultEnd,
      total: this.calculateDifferenceInDefaultHours()
    }

    this.setState(prevState => ({
      counter: this.state.counter + 1,
      days: [...prevState.days, day]
    }), () => { console.log("Add Row", this.state) })
  }

  displayHelp() {
    if (!this.counterActive()) {
      return (<h2 className='hint'>Click "Add Day" to get started!</h2>)
    }
  }

  counterActive() {
    if (this.state.counter != 0) {
      return true
    }
    return false
  }

  displayTable() {
    return (
      this.counterActive() ?
        <TableHours
          format={this.state.format}
          days={this.state.days}
          defaultStart={this.state.defaultStart}
          defaultEnd={this.state.defaultEnd}
          onChangeStart={this.onChangeStart}
          onChangeEnd={this.onChangeEnd} />
        :
        ''
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.displayHelp()}
          <div className='tableDiv container-max'>
            {this.displayTable()}
          </div>
          <div className="white bottom-bar">
            <div className="container-max grid-bottom">
              <div className='float-left item1'>
                Total Hours Worked This Month: {this.state.totalHours}
              </div>
              <div className='buttons'>
                <Button variant="success" className='p-20' onClick={this.addRow}>Add Day</Button>
                <br/>
                <Button variant="success" className='p-20' onClick={this.calculateHours}>Calculate Hours</Button>
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }

}

export default App;
