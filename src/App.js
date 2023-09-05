import './App.css';
import { IPZLogo } from './components/IPZLogo';
import { MainText } from './components/MainText';
import { MoodleLink } from './components/MoodleLink';
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <IPZLogo />
      <MainText />
      <MoodleLink />
      </header>
    </div>
  );
}

export default App;
