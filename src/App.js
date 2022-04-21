import { useContext } from 'react';

import { ThemeContext } from './context/ThemeContext';
// Componentes
import {Header} from './components/Header/Header'
import {Characters} from './components/Characters/Characters';
// Styles
import './App.css';



function App() {

  const {
    darkMode,
    darkThemeSettings
  } = useContext(ThemeContext);

  return (
    <div className="App" style={{backgroundColor: darkMode ? darkThemeSettings.darkMode : darkThemeSettings.lightMode}}>
      <h1>Curso avanzado de Hooks</h1>
      <Header/>
      <Characters/>
    </div>
  );
}

export default App;
