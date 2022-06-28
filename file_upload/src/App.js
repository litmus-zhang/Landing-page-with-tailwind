import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Profile from './components/Profile';
import ReactCSV from './components/ReactCSV';
import ReadCSV from './components/ReadCSV';

function App() {
  return (
    <div className="">
      <Header />
      {/* <Profile /> */}
      <ReactCSV />
      <ReadCSV/>
   
    </div>
  );
}

export default App;
