import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import './Genai.css'

export default function Genai() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  const fetchPoem = async () => {
    try {
      const genAI = new GoogleGenerativeAI("AIzaSyDR1AWR_lfwWlQYtAwjqfuMGH6DJBCAXDo");
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const prompt =
        "Generate a 10-word message for a women’s safety website focusing on empowerment and security.";
      const result = await model.generateContent(prompt);
      const text = result.response.text();
      setResponse(text);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPoem(); // Fetch a poem on initial render

    const poemIntervalId = setInterval(fetchPoem, 30000); // Fetch a new poem every 30 seconds
    const clockIntervalId = setInterval(() => setCurrentTime(new Date()), 1000); // Update clock every second

    return () => {
      clearInterval(poemIntervalId); // Cleanup poem interval on component unmount
      clearInterval(clockIntervalId); // Cleanup clock interval on component unmount
    };
  }, []);

  return (
    <div className="backgroundgen">
         <div style={{ position: "relative",
                marginLeft: "110px",
                height : "100px",
                width : "1000px",
                border : "5px solid  black",
                borderRadius:"10px",
                 backgroundColor : "skyblue",
                fontSize : "30px",
                fontFamily : "Outfit",
                paddingTop: "20px",
                paddingLeft: "90px",
                border : "15px solid transparent",
               }} >

           {error ? <p>{error}</p> : <p>{response}</p>}
         <div
            style={{
                height : "25px",
                fontSize : "20px",
             position: "fixed",
              bottom: 0,
              right: 0,
              backgroundColor: "white",
              padding: "10px",
             borderRadius: "5px",
              boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        }}
      >
        {currentTime.toLocaleTimeString()}
      </div>
    </div>


    </div>
    
  );
}

