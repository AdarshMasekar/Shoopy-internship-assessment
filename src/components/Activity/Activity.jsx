import React, { Fragment } from 'react'

const activity = ({name,date,status,type,price}) => {
  return (
    <Fragment>
      <div className='flex justify-between w-full px-5  py-2 my-2 border border-rose-950 rounded-md'>
        <div className="details self-start w-10/12 ">  
            <img src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_dcb9168484e57e50c0b17699c90cbc98/name-com.jpg" alt="logo" className='w-16 mt-1 rounded-full float-left me-3'  />
          <h4>{name}</h4>
          <p className='w-full'>{date} • {type} Payment • {status}</p>
        </div>
        <div className="price font-bold flex items-center">
          -${price}
        </div>
    </div>
    </Fragment>
  )
}

export default activity;