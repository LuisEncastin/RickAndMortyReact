import React, {useContext} from 'react'
//Context
import { ThemeContext } from '../../context/ThemeContext';

const Header = () => {

const {
  darkMode,
  setDarkMode, 
  handleClick,
} = useContext(ThemeContext);

  return (
    <div className='Header'>
        <h1>React Hooks</h1>
        <button type='button' onClick={handleClick}>{darkMode ? 'DarkMode On' : 'LightMode On'}</button>
        <button type='button' onClick={()=>setDarkMode(!darkMode)}>{darkMode ? 'DarkMode On' : 'LightMode On'}</button>
    </div>
  )
}

export {Header}