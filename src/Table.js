import React from 'react';
import './App.css';
import Table from 'react-bootstrap/Table'
import 'bootstrap/dist/css/bootstrap.min.css'
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import moment from 'moment'

class TableHours extends React.Component {

    render() {
        return (

            <Table id="myTable" striped hover variant="dark">
                <thead className='table-header'>
                    <tr>
                        <th>#</th>
                        <th>Start Time</th>
                        <th>End Time</th>
                        <th>Hours </th>
                    </tr>
                </thead>
                <tbody>
                    {/* {console.log(this.state.days)} */}
                    {this.props.days.map((day) => (
                        <tr>
                            <td>{day.id}</td>
                            <td>
                                <TimePicker
                                    showSecond={false}
                                    defaultValue={this.props.defaultStart}
                                    className="xxx"
                                    onChange={(e) => this.props.onChangeStart(e, day.id)}
                                    format={this.props.format}
                                    use12Hours
                                    inputReadOnly
                                />
                            </td>
                            <td>
                                <TimePicker
                                    showSecond={false}
                                    defaultValue={this.props.defaultEnd}
                                    className="xxx"
                                    onChange={(e) => this.props.onChangeEnd(e, day.id)}
                                    format={this.props.format}
                                    use12Hours
                                    inputReadOnly
                                />
                            </td>
                            <td>{day.total}</td>
                        </tr>
                    ))}

                </tbody>
            </Table>
        )
    }
}

export default TableHours;
