import React from 'react'
import './index.css'

const MonthWeek =({months, weeks, selectedMonth, selectedWeek,weekRestrictionHandler,getWeek})=> {
    

        return (
            <div className='month-display'>
                <form>
                    <label>Month:</label>
                    <select value={selectedMonth} onChange={weekRestrictionHandler}>
                        {months.map(el => <option value={el} >{el}</option>)}
                    </select>
                    <label>Weeks:</label>
                    <select value={selectedWeek} onChange={getWeek}>
                        {weeks.map(el => <option value={el} >{el}</option>)}
                    </select>
                </form>
            </div>)
    }

export default MonthWeek;