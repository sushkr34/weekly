import React from 'react';
import MonthWeek from '../../commonComponents/MonthWeek'
// import ChartDisplay from './ChartDisplay'
import axios from 'axios'
class AdminLandingPage extends React.Component {
  state = {
    tasklist: [],
    data: {
      "user_id":"1",
      "month": null,
      "week": null
    },
    barChart: {
      chart: {
        type: "column"
      },
      title: {
        text: "Week Task Performance"
      },
      xAxis: {
        type: "category"
      },
      yAxis: {
        min: 0,
        title: {
          text: "Points"
        }
      },
      series: [
        {
          name: "Task Performance",
          data: []
        }
      ]
    }
  }
  componentWillMount() {
    const { selectedMonth, selectedWeek } = this.props;
    const { data } = this.state;
    data.month = selectedMonth;
    data.week = selectedWeek;

  }
  GetTasks = () => {
    const { setTasks } = this;
    axios.get("http://localhost:8080/api/gettask")
      .then(function (response) {
        setTasks(response.data.response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentDidMount() {
    this.GetTasks()

  }
  setTasks = tasklist => {
    this.setState({ tasklist });
    console.log(tasklist)
  }
  render() {
    const { months, weeks, selectedMonth, selectedWeek, weekRestrictionHandler, getWeek } = this.props;
    const { tasklist = [] } = this.state
    // console.log(this.state, "admin state");
    // console.log(tasklist,"Helo");
    console.log("admin state", this.state);


    return (
      <div>
        <div className="admin-home">
          <div >

            <MonthWeek months={months} weeks={weeks} selectedMonth={selectedMonth} selectedWeek={selectedWeek}
              weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} />
            {tasklist.map((data, index) => (
              <p>{data.user_id} &nbsp; {data.task_name}  &nbsp; {data.points}</p>
            ))}

          </div>
        </div>

      </div>);
  }
}
export default AdminLandingPage;