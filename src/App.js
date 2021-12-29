import './App.css';
import Challenge from './components/codeChallenge/Challenge';
import CodeChallenge2 from './components/codeChallenge2/CodeChallenge2';
import Contact from './components/contact/Contact';
import Devices from './components/devices/Devices';
import Header from './components/header/Header';
import Membership from './components/membership/Membership';
import Share from './components/sharePhotos/Share';
import Subscribe from './components/subscribe/Subscribe';
import Tools from './components/tools/Tools';

function App() {
  return (
    <div className="App">
      <Header/>
      <Challenge/>
      <Tools/>
      <Share/>
      <CodeChallenge2/>
      <Membership/>
      <Devices/>
      <Subscribe/>
      <Contact/>
    </div>
  );
}

export default App;
