import React, { useState } from 'react'

const Apointment = ({setSection}) => {
    const [days, setDays] = useState([
        { month: "Mon", day: "23", status: false },
        { month: "Tue", day: "24", status: false },
        { month: "Wed", day: "25", status: false },
        { month: "Thu", day: "26", status: true },
        { month: "Fri", day: "27", status: false },
        { month: "Sat", day: "28", status: false },
    ])

    const [times, setTimes] = useState([
        { time: "14:00 PM", status: "not" }, { time: "04:00 AM", status: "yet" }, { time: "15:00 PM", status: "not" }, { time: "17:00 PM", status: "not" }, { time: "9:00 AM", status: "done" }, { time: "18:00 PM", status: "yet" }, { time: "10:00 AM", status: "yet" }, { time: "11:00 AM", status: "yet" }, { time: "12:00 AM", status: "not" },
    ])
    const ChangeDay = (day) => {
        setDays(prevItems =>
            prevItems.map(item =>
                item.day == day ? { ...item, status: true } : { ...item, status: false }
            )
        );
    }
    const ChangeTime = (time) => {
        setTimes(prevItems =>
            prevItems.map(item =>
                item.time == time && item.status != "not" ? { ...item, status: "done" } : item.status == "done" ? { ...item, status: "yet" } : item
            )
        );
    }
    return (
        <>
            <div className='w-full ms-8 mt-6 font-bold'>About</div>
            <p className='ms-4 me-4 text-xs text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit numquam modi sint, praesentium nobis vero repellendus aspernatur soluta qui mollitia, pariatur in incidunt, nam nesciunt nulla doloremque et delectus.</p>
            <div className='w-full  flex justify-between mt-4 px-4'>
                {
                    days.map((day, index) => (
                        <div key={index} onClick={(e) => { ChangeDay(day.day) }} className={`flex flex-col items-center justify-center px-2 py-3 border ${day.status ? "border-primary-1 bg-primary-1 text-white" : null} rounded-xl`}>
                            <span className={` ${day.status ? "text-white" : "text-gray-400"} text-xs`}>{day.month}</span>
                            <span className='text-xl font-bold'>{day.day}</span>
                        </div>
                    ))
                }
            </div>
            <div className='w-11/12 border-t border-gray-200  m-6 '></div>
            <div className='w-full mt-4 px-4 gap-3 flex flex-wrap justify-between'>
                {
                    times.map((time, index) => (
                        <span key={index} onClick={(e) => { ChangeTime(time.time) }} className={`px-4 py-2 text-sm  border rounded-xl ${time.status == "yet" ? "border-primary-1 text-black" : time.status == "done" ? "border-primary-1 bg-primary-1 text-white " : "text-gray-300"}`}>{time.time}</span>
                    ))
                }

            </div>
            <div className='w-full flex mt-12 px-4'>
                <button className='w-10 h-10 p-2 bg-secondry-1 rounded-xl'><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M19.0714 19.0699C16.0152 22.1263 11.4898 22.7867 7.78642 21.074C7.23971 20.8539 6.79148 20.676 6.36537 20.676C5.17849 20.683 3.70117 21.8339 2.93336 21.067C2.16555 20.2991 3.31726 18.8206 3.31726 17.6266C3.31726 17.2004 3.14642 16.7602 2.92632 16.2124C1.21283 12.5096 1.87411 7.98269 4.93026 4.92721C8.8316 1.02443 15.17 1.02443 19.0714 4.9262C22.9797 8.83501 22.9727 15.1681 19.0714 19.0699Z" stroke="#199A8E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M15.9394 12.4131H15.9484" stroke="#199A8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M11.9304 12.4131H11.9394" stroke="#199A8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.9214 12.4131H7.9304" stroke="#199A8E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /></svg></button>
                <button onClick={(e)=>{setSection("payment")}} type='submit' className='w-4/5 ms-8 bg-primary-1 py-2  flex justify-center rounded-full font-semibold text-white' >Book Apointment</button>
            </div>
        </>
    )
}

export default Apointment