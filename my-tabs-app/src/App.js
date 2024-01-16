// import logo from './logo.svg';
// import './App.css';

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



import React, { useState } from 'react';

export default function Tabs() {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div>
        <button
          id="tab0"
          onClick={() => handleTabClick(0)}
          style={{ color: activeTab === 0 ? 'blue' : 'black' }}
        >
          HTML
        </button>
        <button
          id="tab1"
          onClick={() => handleTabClick(1)}
          style={{ color: activeTab === 1 ? 'blue' : 'black' }}
        >
          CSS
        </button>
        <button
          id="tab2"
          onClick={() => handleTabClick(2)}
          style={{ color: activeTab === 2 ? 'blue' : 'black' }}
        >
          JavaScript
        </button>
      </div>
      <div>
        <p style={{ display: activeTab === 0 ? 'block' : 'none' }}>
          The HyperText Markup Language or HTML is the standard markup language
          for documents designed to be displayed in a web browser.
        </p>
        <p style={{ display: activeTab === 1 ? 'block' : 'none' }}>
          Cascading Style Sheets is a style sheet language used for describing
          the presentation of a document written in a markup language such as
          HTML or XML.
        </p>
        <p style={{ display: activeTab === 2 ? 'block' : 'none' }}>
          JavaScript, often abbreviated as JS, is a programming language that
          is one of the core technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>
      </div>
    </div>
  );
}

