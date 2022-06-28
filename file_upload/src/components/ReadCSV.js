import React, { useState } from 'react'
import Profile from './Profile'
import Papa from "papaparse"
import { SAMPLE_DATA } from '../constants'

const allowedExtensions = ['csv']


export default function ReadCSV()
{
    const [data, setData] = useState([]);
    const [csvHeader, setCsvHeader] = useState([]);
    const [error, setError] = useState("");
    const [file, setFile] = useState("");

    const handleFileChange = e =>
    { 
        setError(" ")
        if(e.target.files.length){
            const inputFile = e.target.files[0]

            const fileExtension = inputFile?.type.split("/")[1]
            if(!allowedExtensions.includes(fileExtension)){
                setError("Please upload a valid file")
                return
            }
            setFile(inputFile)
        }
    }

    const handleParse = () =>
    {
        if(!file) return setError("Please upload a file")
             
        const reader = new FileReader()
        reader.onload = async ({target}) =>
        {
            const csv = Papa.parse(target.result, { header: true })
            const parsedData = csv?.data
            const header = Object.keys(parsedData[0])
            const data = parsedData.map(row =>
            {
                const obj = {}
                let counter = 0
                header.forEach(key => obj[key] = row[key])
                console.log(obj)
                // if (obj.Email)
                // {
                //     counter++
                //     setError("Email already exists")
                //     return
                // }
               
                setData(data => [...data, obj])
                console.log(counter)
            })

            setCsvHeader(csvHeader)
            console.log(header, data);
        }
        reader.readAsText(file)

    }

    return (
        <div>
            <label htmlFor='csvInput'>Enter CSV File</label>
            <input
                type='file'
                name='file'
                id='csvInput'
                onChange={handleFileChange} />
            <div>
                <button onClick={handleParse}>Submit File</button>
            </div>
            <div className='mt-6 flex'>
                { csvHeader.map((column, index) => <div key={index}>{column}</div>
                )}
            </div>
            <div className='mt-6'>
                {data.map((column, index) => <Profile key={index} {...column} />
                )}
            </div>

        </div>
    )
}
// const [csvFile, setCsvFile] = useState()
// const [csvArray, setCsvArray] = useState([])
// const processCSV = (str, delim=",") =>
// {
//     const headers = str.slice(0, str.indexOf("\n")).split(delim)
//     const rows = str.slice(str.indexOf("\n") + 1).split('\n')
//     console.log(headers);
//     console.log(rows);
//     const newArr = rows.map(row =>
//     {
//         const values = row.split(delim)
//         const eachObj = headers.reduce((obj, header, i) =>
//         {
//             obj[header] = values[i]
//             return obj

//         }, {})
//         return eachObj
//     })
//     setCsvArray(newArr)
// }
// const submit = () =>
// {
//     const file = csvFile
//     const reader = new FileReader()
//     reader.onload = function(e) {
//         const text = e.target.result
//         console.log(text);
//         processCSV(text)
//     }

//     reader.readAsText(file)

// }
// console.log(csvArray);
// return (
//   <form id='form'>
//       <input
//           type={"file"}
//           accept=".csv"
//           id="csvFile"
//           onChange={(e) => setCsvFile(e.target.files[0])}
//       />
//       <br />
//       <button
//           type='submit'
//           onClick={e =>
//           {
//               e.preventDefault()
//               if(csvFile) submit()
//           }}
      
//       >
//           Submit
//       </button>
//       <br/>
//       <br />
//       {csvArray.length > 0 && 
//           csvArray.map((file, index) => <h1 key={index}>Hello { file}</h1>) 
//         } 
// </form>
// )