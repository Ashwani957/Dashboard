// import React from "react";
// import { Paperclip, NotebookPen, Pointer, Settings } from 'lucide-react';
 

// type Props = {};

// export default function Navbar({}: Props) {
//   return (
    
//     <div className=" relative flex justify-center mt-[29rem]">
       
//       <div className=' relative   w-[24rem] h-[4rem] bg-[#75002B] p-4 rounded-3xl shadow-3xl flex items-center justify-between text-[#FFFF] text-xs'>
//         <button className="flex flex-col items-center font-bold">
//           <Paperclip className="mb-1 w-6 h-6" />
//           Attachment
//         </button>
//         <button className="flex flex-col items-center font-bold">
//           <NotebookPen className="mb-1 w-6 h-6" />
//           Type
//         </button>
        
//         <button className="flex flex-col items-center font-bold">
//           <Pointer className="mb-1 w-6 h-6" />
//           Quick Actions
//         </button>
//         <button className="flex flex-col items-center font-bold">
//           <Settings className="mb-1 w-6 h-6" />
//           Settings
//         </button>
//       </div>
//     </div>

//   );
// }



// try code 

//  import React, { useState, useEffect, useRef } from 'react';  
//  import { Paperclip, NotebookPen, Pointer, Settings, Send } from 'lucide-react';  
 
//  export default function ChatApp() {  
//    const [messages, setMessages] = useState([]);  
//    const [inputValue, setInputValue] = useState('');  
//    const [isTyping, setIsTyping] = useState(false);  
//    const messagesEndRef = useRef(null);  
 
//    useEffect(() => {  
//      // Scroll to the bottom of the messages area  
//      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });  
//    }, [messages]);  
 
//    const handleInputChange = (e) => {  
//      setInputValue(e.target.value);  
//    };  
 
//    const handleSendMessage = () => {  
//      if (inputValue.trim()) {  
//        setMessages([...messages, { text: inputValue, sender: 'user' }]);  
//        setInputValue('');  
//        // Simulate bot response  
//        setIsTyping(true);  
//        setTimeout(() => {  
//          setMessages(prev => [...prev, { text: 'This is a response from the bot.', sender: 'bot' }]);  
//          setIsTyping(false);  
//        }, 1000);  
//      }  
//    };  
 
//    const handleKeyPress = (e) => {  
//      if (e.key === 'Enter') {  
//        handleSendMessage();  
//      }  
//    };  
 
//    return (  
//      <div className="flex flex-col h-screen">  
//        <div className="flex-grow overflow-auto p-4 bg-gray-100">  
//          {messages.map((msg, index) => (  
//            <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>  
//              <div className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>  
//                {msg.text}  
//              </div>  
//            </div>  
//          ))}  
//          {isTyping && <div className="italic text-gray-500">Typing...</div>}  
//          <div ref={messagesEndRef} /> {/* Ref for scrolling to the latest message */}  
//        </div>  
 
//        <div className="flex p-2 bg-white">  
//          <input  
//            type="text"  
//            value={inputValue}  
//            onChange={handleInputChange}  
//            onKeyPress={handleKeyPress}  
//            className="flex-grow p-2 border border-gray-300 rounded"  
//            placeholder="Type your message..."  
//          />  
//          <button className="ml-2 bg-blue-600 text-white rounded px-4" onClick={handleSendMessage}>  
//            <Send className="w-4 h-4" />  
//          </button>  
//        </div>  
//      </div>  
//    );  
//  }

// try code 3


import React, { useState } from "react";  
import { Paperclip, NotebookPen, Pointer, Settings, Send } from 'lucide-react';  

const dummyApiResponse = (query) => {  
  // Simulate a dummy API response based on the user's query.  
  return new Promise((resolve) => {  
    setTimeout(() => {  
      resolve(`Response to "${query}" from the bot.`);  
    }, 1000); // Simulates network delay  
  });  
};  

export default function  Navbar() {  
  const [inputVisible, setInputVisible] = useState(false);  
  const [messages, setMessages] = useState([]);  
  const [inputValue, setInputValue] = useState('');  

  const handleTypeClick = () => {  
    setInputVisible(true); // Show input box when "Type" is clicked  
  };  

  const handleInputChange = (e) => {  
    setInputValue(e.target.value); // Update input value as user types  
  };  

  const handleSendMessage = async () => {  
    if (inputValue.trim()) {  
      // Add user message to messages  
      const userMessage = { text: inputValue, sender: 'user' };  
      setMessages((prev) => [...prev, userMessage]);  

      // Simulate API response  
      const botResponseText = await dummyApiResponse(inputValue);  
      const botMessage = { text: botResponseText, sender: 'bot' };  

      // Add bot message to messages after a delay  
      setMessages((prev) => [...prev, botMessage]);  
      setInputValue(''); // Clear input field  
    }  
  };  

  const handleKeyPress = (e) => {  
    if (e.key === 'Enter') {  
      handleSendMessage(); // Send message on enter key press  
    }  
  };  

  return (  
    <div className="flex flex-col h-screen">  
      {/* Chat Message Area */}  
      <div className="flex-grow overflow-auto p-4 bg-gray-100">  
        {messages.map((msg, index) => (  
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : ''}`}>  
            <div className={`inline-block px-4 py-2 rounded-lg ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>  
              {msg.text}  
            </div>  
          </div>  
        ))}  
      </div>  

      {/* Navbar */}  
      <div className="relative flex justify-center">  
        <div className='relative w-[24rem] h-[4rem] bg-[#75002B] p-4 rounded-3xl shadow-3xl flex items-center justify-between text-[#FFFF] text-xs'>  
          <button className="flex flex-col items-center font-bold">  
            <Paperclip className="mb-1 w-6 h-6" />  
            Attachment  
          </button>  
          <button className="flex flex-col items-center font-bold" onClick={handleTypeClick}>  
            <NotebookPen className="mb-1 w-6 h-6" />  
            Type  
          </button>  
          <button className="flex flex-col items-center font-bold">  
            <Pointer className="mb-1 w-6 h-6" />  
            Quick Actions  
          </button>  
          <button className="flex flex-col items-center font-bold">  
            <Settings className="mb-1 w-6 h-6" />  
            Settings  
          </button>  
        </div>  
      </div>  

      {/* Input Field */}  
      {inputVisible && (  
        <div className="flex p-2 bg-white">  
          <input  
            type="text"  
            value={inputValue}  
            onChange={handleInputChange}  
            onKeyPress={handleKeyPress}  
            className="flex-grow p-2 border border-gray-300 rounded"  
            placeholder="Type your message..."  
          />  
          <button className="ml-2 bg-blue-600 text-white rounded px-4" onClick={handleSendMessage}>  
            <Send className="w-4 h-4" />  
          </button>  
        </div>  
      )}  
    </div>  
  );  
}