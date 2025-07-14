//import logo from './logo.svg';
import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";



// export default class App extends Component
const App = () => {
  const pageSize = "15";
  const apiKey = process.env.REACT_APP_NEWS_API;
  // state = {
  //   progress: 0,
  // };

  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [triggerSearch, setTriggerSearch] = useState(false);
  //  setProgress = (progress) => {
  //     setState({ progress: progress });
  //   };
  // render() {
  return (
    <div>
      <Router>
        <NavBar
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setTriggerSearch={setTriggerSearch}
        />
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                searchQuery={searchQuery}
                setProgress={setProgress}
                triggerSearch={triggerSearch}
                setTriggerSearch={setTriggerSearch}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                searchQuery={searchQuery}
                setProgress={setProgress}
                triggerSearch={triggerSearch}
                setTriggerSearch={setTriggerSearch}
                apiKey={apiKey}
                key="business"
                pageSize={pageSize}
                country="us"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                searchQuery={searchQuery}
                setProgress={setProgress}
                triggerSearch={triggerSearch}
                setTriggerSearch={setTriggerSearch}
                apiKey={apiKey}
                pageSize={pageSize}
                country="us"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/general"
            element={
              <News
                searchQuery={searchQuery}
                setProgress={setProgress}
                triggerSearch={triggerSearch}
                setTriggerSearch={setTriggerSearch}
                apiKey={apiKey}
                key="general"
                pageSize={pageSize}
                country="us"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News
                searchQuery={searchQuery}
                setProgress={setProgress}
                triggerSearch={triggerSearch}
                setTriggerSearch={setTriggerSearch}
                apiKey={apiKey}
                key="health"
                pageSize={pageSize}
                country="us"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                searchQuery={searchQuery}
                setProgress={setProgress}
                triggerSearch={triggerSearch}
                setTriggerSearch={setTriggerSearch}
                apiKey={apiKey}
                key="science"
                pageSize={pageSize}
                country="us"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News
                searchQuery={searchQuery}
                setProgress={setProgress}
                triggerSearch={triggerSearch}
                setTriggerSearch={setTriggerSearch}
                apiKey={apiKey}
                key="sports"
                pageSize={pageSize}
                country="us"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                searchQuery={searchQuery}
                setProgress={setProgress}
                triggerSearch={triggerSearch}
                setTriggerSearch={setTriggerSearch}
                apiKey={apiKey}
                key="technology"
                pageSize={pageSize}
                country="us"
                category="technology"
              />
            }
          />
        </Routes>
        <Footer/>
        
      </Router>
    </div>
  );
  //}
};

export default App;
