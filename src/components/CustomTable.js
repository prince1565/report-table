// import React, { useState, useEffect } from 'react';
// import tableData from '../data/tableData.json';  // Importing the dummy JSON data

// const CustomTable = () => {
//   const [data, setData] = useState({ companies: [], years: [] });

//   useEffect(() => {
//     // Load the data when the component is mounted
//     setData(tableData);
//   }, []);

//   return (
//     <div className="table-container">
//       <table>
//         <thead>
//           <tr>
//             <th className="fixed-header">Amount in BSUD</th> 
//             {data.years.map((year, index) => (
//               <th key={index} className="fixed-header">{year}</th>
//             ))}
//           </tr>
//         </thead>
//         <tbody>
//           {data.companies.map((company, index) => (
//             <tr key={index}>
//               <td className="fixed-column">{company.name}</td> 
//               {company.data.map((value, idx) => (
//                 <td key={idx}>{value}</td> 
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CustomTable;


import React, { useState, useEffect } from 'react';
import tableData from '../data/tableData.json';  // Importing the dummy JSON data

const CustomTable = () => {
  const [data, setData] = useState({ companies: [], years: [] });

  useEffect(() => {
    // Load the data when the component is mounted
    setData(tableData);
  }, []);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th className="fixed-header">Amount in BSUD</th>
            {data.years.length > 0 && data.years.map((year, index) => (
              <th key={index} className="fixed-header">{year}</th>
            ))}
          </tr>
        </thead>
      </table>
      <div className="table-scroll">
        <table>
          <tbody>
            {data.companies.length > 0 && data.companies.map((company, index) => (
              <tr key={index}>
                <td className="fixed-column">{company.name}</td>
                {company.data.map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  
};

export default CustomTable;
