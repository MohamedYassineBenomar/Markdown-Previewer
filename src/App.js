import './App.scss';
import Markdown from './components/markdown/markdown';
import Previewer from './components/previewer/previewer';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <Markdown />
        <Previewer />
      </div>
    </div>
  );
}

export default App;
