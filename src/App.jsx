import Character from './components/Character';
import CharacterList from './components/CharacterList';
import logo from './assets/logo.png'
function App() {

  return (
    <div className='text-white'>
      <div className="logo">
      <img src={logo} alt="" />
      </div>
      <h4 className='logo nameH3'>Vite + React</h4>
        <CharacterList/>
    </div>

  );
}

export default App;

