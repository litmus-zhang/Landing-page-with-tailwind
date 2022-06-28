import React from 'react'

export default function (file) 
{
// console.log(file);    
    const {name, age, Phone , DOB, Email} = file
  return (
      <div className='mt-2 flex justify-between p-3 bg-pink-500 rounded-md hover:bg-gray-50 text-black transition-all duration-300 cursor-pointer'>
          <div>
              {file.name}
          </div>
          <p>
              {age}
          </p>
          <div>
          {DOB}
          </div>
          <div>
          {Email}
          </div>
          <div>
          {Phone}
          </div>
    </div>
  )
}
