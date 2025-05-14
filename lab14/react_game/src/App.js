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

//

// import './App.css';

// const changeText = (event) => {
//   console.log(event.target);
//   event.target.innerText = event.target.innerText + "被點了";
// };

// const styleArgument = {
//   color: 'blue',
//   cursor: 'pointer',
//   fontSize: '2rem',
// };

// function App() {
//   return (
//     <div className="App">
//       <h1 style={styleArgument} onClick={changeText}>
//         hello CGU!!
//       </h1>
//     </div>
//   );
// }

// export default App;

//

// import React, { useState } from 'react';

// function App() {
//   const [clickedIndex, setClickedIndex] = useState(null); // 儲存被點擊的按鈕編號

//   const buttons = [];
//   for (let i = 1; i <= 10; i++) {
//     buttons.push(
//       <button key={i} onClick={() => setClickedIndex(i)}>
//         {clickedIndex === i ? `第${i}個按鍵被點了` : `第${i}個按鍵`}
//       </button>
//     );
//   }

//   return (
//     <div style={{ margin: '10px 0' }}>
//       {buttons}
//     </div>
//   );
// }

// export default App;
//


// ./src/App.js


//
// import React from 'react';
// import MultiButton from './cgu_multiButton';
// import HelloCGU from './cgu_hello';

// function App() {
//   return (
//     <div>
//       <HelloCGU />
//       <MultiButton num={10} />
//     </div>
//   );
// }

// export default App;
// //

import React from 'react';
import SignInSide from './cgu_login'; // ✅ 引入你的登入畫面元件

function App() {
  return (
    <div>
      <SignInSide />
    </div>
  );
}

export default App;
