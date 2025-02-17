import React, { useContext } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import Homepage from "./components/homepage";
import { AppContext } from "./components/Context";

function App() {

//destructuring isDark from context
  const { isDark, setisDark } = useContext(AppContext);

//toggle between isDark and !isDark

  const toggleDarkMode = () => {
    setisDark(!isDark);
  };



  return (
    //changing the backgroundcolor on the basis of isDark
    <body style={{backgroundColor:isDark?"black":"white",height:'100vh'}}>
    <div style={{color:isDark?"white":"black"}}>
      <div style={{textAlign:"end",width:"80%"}}>
      <button className="toggle"
        style={{ backgroundColor:isDark?"white":"black",color:isDark?"black":"white"}}
        onClick={toggleDarkMode}
      >
        {isDark?"Light Mode" :"Dark Mode"}
      </button>
      </div>
     {/* <QuestionBox /> */}
     {/* <Result /> */}
     <Homepage />
    </div>
    </body>
  );
}

export default App;