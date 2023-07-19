import Labs from "./labs";
import HelloWorld from "./labs/a3/hello-world";
import Tuiter from "./tuiter";
import { HashRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";

function App() {
  
  return (
    <HashRouter>
      <div className="container">
        <Routes>
          <Route path="/"         element={<Navigate to="/labs"/>}/>
          <Route path="/labs/*"   element={<Labs/>}/>
          <Route path="/hello"    element={<HelloWorld/>}/>
          <Route path="/tuiter/*" element={<Tuiter/>}/>
        </Routes>
      </div>
    </HashRouter>
  );

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //       Welcome to Web Dev!.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
  // 2.1.2 Implementing the Labs component
    // return(
    //   <div className='container'>
    //     <HelloWorld/>
    //     <Labs/>
    //     <Tuiter/>
    //   </div>
    // );

    

    // <HashRouter>
    //     <div className="container">
    //         <HelloWorld/>
    //         <Labs/>
    //         <Tuiter/>
    //     </div>
    // </HashRouter>
};

export default App;
