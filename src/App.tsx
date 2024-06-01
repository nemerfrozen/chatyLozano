import { useState } from "react";
import reactLogo from "./assets/logo.jpg";
// import viteLogo from '/vite.svg'
import ItemChat from "./components/ItemChat";
import SearchInput from "./components/SearchInput";
import openAI from "./services/open";



function App() {
  const [data, setdata] = useState<Message[]>([]);  

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    //console.log("submit", e);
    const textInput = e.target[0].value;
    //console.log(textInput);
    const messages = [
      { role: "user", content: textInput },
    ];
    // push data to state
    const messageData = [...data, messages[0]];
    setdata(messageData);
    textInput.value = "";    
    const response: Message = await openAI(messages);    
    const newData = [...messageData, response];
    setdata(newData);
  };

  return (
    <div className="container py-5 px-4">
      <div
        className="row rounded-lg overflow-hidden shadow"
        style={{
          height: "auto",
        }}
      >
        <div className="col-md-12 px-0">
          <div className="bg-pink-300">
            <div className="bg-gray px-4 py-2 bg-light d-flex justify-content-center">
              <img height={250} src={reactLogo} alt="" />
              <p className="h5 mb-0 py-1"></p>
            </div>
            <div
              className="messages-box bg-white"
              style={{
                height: "auto",
                overflowY: "scroll",
              }}
            >
              <div className="list-group rounded-0 p-3">
                {
                  data.map((message, index) => {
                    return <ItemChat key={index} role={message.role} content={message.content} />;
                  })
                
                }
                
              </div>
            </div>
          </div>
          <SearchInput submit={handleSubmit} />
        </div>
      </div>
    </div>
  );
}

export default App;
