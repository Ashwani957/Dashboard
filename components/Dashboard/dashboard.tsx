 // components/Dashboard.tsx  
import React, { useState } from 'react';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faTachometerAlt, faFolder, faCalendar, faChartBar, faClipboardList, faFileAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';  
import { Line } from 'react-chartjs-2';  

// import {Component} from '../ui/bargraph'
import {Component} from '../ui/bargraph';
import  Areacharts from '../ui/areachart'
import { TotalComplain } from '../ui/totalComplain';
import { Lowrisk } from '../ui/lowrisk';
import {  
  Chart as ChartJS,  
  CategoryScale,  
  LinearScale,  
  LineElement,  
  PointElement,  
  Filler,  
  Tooltip,  
  Legend,  
} from 'chart.js';  
 


// Register the necessary components  
ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Filler, Tooltip, Legend);  
 
const Dashboard: React.FC = () => {  
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State for sidebar visibility  

  const data = {  
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],  
    datasets: [  
      {  
        label: 'Trending Issues',  
        data: [65, 59, 80, 81, 56, 55],  
        fill: false,  
        backgroundColor: 'rgb(75, 192, 192)',  
        borderColor: 'rgba(75, 192, 192, 0.2)',  
      },  
    ],  
  };  

  const toggleSidebar = () => {  
    setIsSidebarOpen(prev => !prev); // Toggle sidebar visibility  
  };  

  return (  
    <div className="flex">  
      {/* Sidebar Toggle Button */}  
      <button   
        className="p-2 bg-gray-800 text-white absolute z-10"   
        onClick={toggleSidebar}  
      >  
        <FontAwesomeIcon icon={isSidebarOpen ? faTimes : faBars} />  
      </button>  

      {/* Sidebar */}  
      {isSidebarOpen && (  
        <div className="w-1/4 bg-gray-800 text-white p-4 transition-transform duration-300">  
          <h2 className="text-lg font-bold">Dashboards</h2>  
          <ul>  
            <li className="flex items-center">  
              <FontAwesomeIcon icon={faTachometerAlt} className="mr-2" />  
              Overview  
            </li>  
            <li className="flex items-center">  
              <FontAwesomeIcon icon={faFolder} className="mr-2" />  
              Projects  
            </li>  
            <li className="flex items-center">  
              <FontAwesomeIcon icon={faCalendar} className="mr-2" />  
              Calendar  
            </li>  
            <li className="flex items-center">  
              <FontAwesomeIcon icon={faChartBar} className="mr-2" />  
              Results  
            </li>  
            <li className="flex items-center">  
              <FontAwesomeIcon icon={faClipboardList} className="mr-2" />  
              Questionnaires  
            </li>  
            <li className="flex items-center">  
              <FontAwesomeIcon icon={faFileAlt} className="mr-2" />  
              Secure File Exchange  
            </li>  
          </ul>  
        </div>  
      )}  

      {/* Main Content */}  
      <div className={`flex-1 p-6 transition-transform duration-300 ${isSidebarOpen ? 'ml-1/4' : ''}`}>  
        <h1 className="text-2xl font-bold">Outstanding Issues</h1>  
        <div className="grid grid-cols-4 gap-4 mt-4">  



          {/* Cards for issues */}  
          {['Critical Risk Issues', 'High Risk Issues', 'Medium Risk Issues', 'Total Complain '].map((issue, index) => (  
            <div key={index} className="bg-white p-4 rounded shadow">  
              <h2 className="font-semibold">{issue}</h2>  
              {/* editing portion  */}

              {/* editing are done here  */}
              {/* <p>{index === 0 ? '0' : index === 1 ? '1' : index === 2 ? '7' : '2'}</p>   */}

              <p>{index === 0 ? '5' : index === 1 ? <Component></Component>: index === 2 ? <Lowrisk></Lowrisk> : <TotalComplain></TotalComplain>}</p>  
            


            </div>  
          ))}  


        </div>  

        {/* Trending Issues Chart */}  
        <div className="mt-6">  
          <h2 className="font-semibold">Trending Issues</h2>  
          <div className="bg-white p-4 rounded shadow mt-2">  
            {/* this is for graph  */}
            {/* <Line data={data} />   */}

            <Areacharts></Areacharts>
          </div>  
        </div>  

        {/* Remediated Issues */}  
        <div className="mt-6">  
          <h2 className="font-semibold">Remediated Issues</h2>  
          <div className="bg-white p-4 rounded shadow mt-2">  
            <p>56 of 139</p>  
          </div>  
        </div>  
      </div>  
      <div>
       
      </div>
    </div>  
  );  
};  

export default Dashboard;

 