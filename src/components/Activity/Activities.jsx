import React, { useState } from 'react'
import Activity from "./Activity"

const Activities = () => {
  const data = [
    {
      name:"Name.com Inc",
    date : "Jun 22 2023",
    status : "completed",
    type:"credit card",
    price:"9.2"
    },
    {
      name:"Name.com Inc",
    date : "Jun 12 2023",
    status : "completed",
    type:"credit card",
    price:"8.9"
    },
    {
      name:"Name.com Inc",
    date : "Jun 22 2023",
    status : "pending",
    type:"credit card",
    price:"15.6"
    },
    {
      name:"Name.com Inc", 
    date : "Apr 25 2023",
    status : "completed",
    type:"automatic",
  price:"8.9"
    },
    {
    name:"Name.com Inc",
    date : "Jan 19 2023",
    status : "pending",
    type:"automatic",
    price:"8.9"
    },
    {
    name:"Name.com Inc",
    date : "May 19 2023",
    status : "pending",
    type:"credit card",
    price:"5.6"
    },
    {
    name:"Name.com Inc",
    date : "Apr 19 2023",
    status : "completed",
    type:"credit card",
    price:"11.5"
    },
    {
    name:"Name.com Inc",
    date : "Apr 19 2023",
    status : "pending",
    type:"automatic",
    price:"8.9"
    },
  ]

  const [values,setValues] =useState(data);

  const handleFilter = () => {
    const typeValue = document.getElementById('type').value;
    const statusValue = document.getElementById('status').value;
    const dateValue = document.getElementById('date').value;

    let filteredData = data.filter((item) => item.type === typeValue);
    filteredData = filteredData.filter((item) => item.status === statusValue);
    
    let today = new Date();
    
    if(dateValue === 'week') {
      filteredData = filteredData.filter((item) => {
        let itemDate = new Date(item.date + ' ' + today.getFullYear());
        return itemDate >= new Date(new Date().setDate(new Date().getDate() - 7));
      });
    } else if(dateValue === 'month') {
      filteredData = filteredData.filter((item) => {
        let itemDate = new Date(item.date + ' ' + today.getFullYear());
        return itemDate >= new Date(new Date().setDate(new Date().getDate() - 30));
      });
    } else if(dateValue === '3months') {
      filteredData = filteredData.filter((item) => {
        let itemDate = new Date(item.date + ' ' + today.getFullYear());
        return itemDate >= new Date(new Date().setDate(new Date().getDate() - 90));
      });
    }

    setValues(filteredData);
  }

  return (
    <div className='flex flex-col items-center w-8/12 mx-auto'>
      <h2 className='self-start'>Filter by</h2>
      <div className="filters self-start gap-5">
          <select name="date" id="date">
            <option value="week" >Last 7 days</option>
            <option value="month" >Last 30 days</option>
            <option value="3months">Last 90 days</option>
          </select>
          <select name="type" id="type">
            <option value="automatic">Automatic</option>
            <option value="credit card">Credit card</option>
          </select>
          <select name="status" id="status">
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>

          <button onClick={() => handleFilter()} className='btn btn-primary border border-cyan-900 rounded-lg mx-1'>Filter</button>
      </div>
      {
        values.map((item) => {
          return<>
          <Activity name= {item.name} date={item.date} status={item.status} type={item.type} price={item.price} />
          </>
        })
      }
    </div>
  )
}

export default Activities