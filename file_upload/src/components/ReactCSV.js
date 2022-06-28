import React from 'react'
import { CSVLink } from 'react-csv'
import { SAMPLE_DATA } from '../constants'

export default function ReactCSV() {
  return (
      <CSVLink
          data={SAMPLE_DATA}
          filename={"Sample_submision"}
          target="_blank"
          className="bg-black text-white mt-5"
      >
          
          Download CSV
      </CSVLink>
  )
}
