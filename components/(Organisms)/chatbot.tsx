// "use client"
// import 'regenerator-runtime/runtime'; // Import regenerator-runtime  

// import React from 'react';
// import {Background} from "@/components/(Atoms)/form"

// import Navbar from '../(Molecules)/navbar'; // Adjust the path as needed
//  import Microphone from "../(Atoms)/microphone" // Adjust the path as needed
// // import '../styles/globals.css'; // Your global styles 
 
//  import Raisecomplaint from '../(Molecules)/raisecomplaint';
// import { Track } from '../(Molecules)/trackrequest';
// import { Feedback } from '../(Molecules)/feedback';
// import { QuickActions } from '../(Molecules)/quickactions';

// import  Railmadaheader from '../(Molecules)/railmadaheader'

// type Props = {};

// export  default function ChatBot({ }: Props) {
//     // return (
//     //     <div className=' relative flex   items-center justify-center min-h-screen bg-gray-900 flex-wrap'>
            
//     //         {/* first page */}
//     //         <div >
//     //             <Background />

//     //             {/* Chat content goes here */}
//     //             <div className="flex justify-center mt-[-36rem]">
//     //                 <Microphone />
//     //             </div>
//     //             <div>

//     //             <Navbar></Navbar>   
//     //             </div>
//     //         </div>
//     //         {/* second page */}
//     //         {/* <div>
//     //         <Raisecomplaint/>

//     //         </div> */}

//     //         {/* third page  */}
//     //         {/* <div>
//     //         <Feedback/> 

//     //         </div> */}
//     //         {/* fourth page  */}
//     //         {/* <div>
//     //             <QuickActions></QuickActions>
//     //         </div> */}

//     //         {/* <div>
//     //             <Track></Track>
//     //         </div> */}
    
           
            
//     //         {/* <Track/>
//     //         <QuickActions/> */}

 
        

//     //     </div>
        

//     // );

//     return (
       
//             <Railmadaheader></Railmadaheader>
        
//     )
// }


 
// testing part 



//  "use client"
//  import 'regenerator-runtime/runtime'; // Import regenerator-runtime  

//  import React from 'react';
//  import {Background} from "@/components/(Atoms)/form"

//  import Navbar from '../(Molecules)/navbar'; // Adjust the path as needed
//   import Microphone from "../(Atoms)/microphone" // Adjust the path as needed
// // // import '../styles/globals.css'; // Your global styles 
 
//   import Raisecomplaint from '../(Molecules)/raisecomplaint';
//  import { Track } from '../(Molecules)/trackrequest';
//  import { Feedback } from '../(Molecules)/feedback';
//  import { QuickActions } from '../(Molecules)/quickactions';

//  import  Railmadaheader from '../(Molecules)/railmadaheader'
// import Dashboard from '../Dashboard/dashboard';

// type Props = {};

// export  default function ChatBot({ }: Props) {
  
//     return (
//         <div>

//         <Railmadaheader></Railmadaheader>
//         <Dashboard></Dashboard>

//         </div>
//     )
// }




 



 "use client"
 import 'regenerator-runtime/runtime'; // Import regenerator-runtime  

 import React from 'react';
 import {Background} from "@/components/(Atoms)/form"

 import Navbar from '../(Molecules)/navbar'; // Adjust the path as needed
  import Microphone from "../(Atoms)/microphone" // Adjust the path as needed
// // import '../styles/globals.css'; // Your global styles 
 
  import Raisecomplaint from '../(Molecules)/raisecomplaint';
 import { Track } from '../(Molecules)/trackrequest';
 import { Feedback } from '../(Molecules)/feedback';
 import { QuickActions } from '../(Molecules)/quickactions';

 import  Railmadaheader from '../(Molecules)/railmadaheader'
import Dashboard from '../Dashboard/dashboard';
import Head from 'next/head'
type Props = {};

export  default function ChatBot({ }: Props) {
  
    // return (
    //     <div>

    //     <Railmadaheader></Railmadaheader>
    //     <Dashboard></Dashboard>

    //     </div>
    // )
    return (  
        <div>  
          <Head>  
            <title>Dashboard</title>  
            <meta name="description" content="Dashboard Overview" />  
            <link rel="icon" href="/favicon.ico" />  
          </Head>  
          <Dashboard />  
        </div>  
      );
      
      



    };  




 