import React, { useState } from 'react';

const Searchbar = () => {
  const [keyword, setKeyword] = useState('');

  const handleChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleDownload = () => {
    // Download the file here.
  };

  return (
    <div className='w-8/12 mx-auto flex'>
        <div className='searchbar w-full my-5 border border-dark rounded-full  flex items-center justify-center px-2 py-2'>
        <box-icon name='search-alt-2' ></box-icon>
        <input 
        className='w-full ms-2 focus:border-none border-none p-1'
            type="text"
            placeholder="Search by name or email"
            value={keyword}
            onChange={handleChange}
        />

        </div>
      <button className='download bg-[#152C8E]/20 p-2 mx-1 my-5 rounded-full w-12' onClick={handleDownload}><box-icon name='download' ></box-icon></button>
    </div>
  );
};

export default Searchbar;
