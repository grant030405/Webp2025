import logo from './logo.svg';
import './App.css';
import MultiButton from './cgu_multiButton'
import HelloCGU from './cgu_hello'
const styleArgument = {
  color: 'red', // 你可以設定任何 CSS 樣式
  cursor: 'pointer', // 讓滑鼠移上去時顯示手指
  userSelect: 'none' // 防止文字被雙擊選取
};



function App() { 
  return ( 
      <div className="App"> 
         { HelloCGU() }  
        <div> 
        { MultiButton(10) } 
        </div> 
      </div> 
    ); 
  }
export default App;
