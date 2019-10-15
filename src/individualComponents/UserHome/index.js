import React from 'react';
import LogoHeader from '../../commonComponents/LogoHeader'
import MonthWeek from '../../commonComponents/MonthWeek'
import axios from 'axios'
class UserHome extends React.Component{
        state={
        tasklist :[],
        data:{
            "user_id":"1",
            "month": null,
            "week": null
        },
    }
    
     
      
      componentWillMount(){
        const {selectedMonth, selectedWeek}=this.props;
        const{data} = this.state;
        data.month = selectedMonth;
        data.week = selectedWeek;
      }
      GetTasks =() =>
      {
          const { setTasks } = this;
          axios.post("http://localhost:8080/api/user_task_list",this.state.data)
      .then(function (response){
        setTasks (response.data.response);
      })
      .catch(function(error){
        console.log(error);
      }); 
    }
    componentDidMount(){
       this.GetTasks()
   
    }
    setTasks = tasklist => {
        this.setState({ tasklist });
    }
    render(){
       
        const { months,weeks,selectedMonth,selectedWeek,weekRestrictionHandler,getWeek}=this.props;
        const {tasklist}=this.state;
        // console.log("props", this.props)
        // console.log("state",this.state)
        // console.log("month", this.props.selectedMonth)
        return (
            <div className="user-home">
            <div >
                
                <MonthWeek months={months} weeks={weeks} selectedMonth={selectedMonth} selectedWeek={selectedWeek} 
                weekRestrictionHandler={weekRestrictionHandler} getWeek={getWeek} />
                {tasklist.map((data,index)=>(
                    <p>{data.task_name}  &nbsp; {data.points}</p>
                ))}
             
            </div>
        </div>
        );
    }
}
export default UserHome