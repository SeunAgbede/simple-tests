import React, { useState, useEffect } from 'react';
import Switch from "react-ios-switch"
import lighton from '../assets/light _mode_FILL1.png'
import lightoff from '../assets/light_mode_FILLO. png'
import darkon from '../assets/dark_mode_FILLI. png'
import darkoff from '.. /assets/ dark_mode_FILLO.png'


function ThemeSwitcher() {

  const [darkMode, setDarkMode] = useState(true);
  const [toggle, setToggle] = useState(true)

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === "true"
    setDarkMode(isDarkMode)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', darkMode)
  }, [darkMode])

  function toggleDarkMode() {
    setDarkMode(!darkMode);
    setToggle(!toggle)
  }

  return (
    <div className="flex justify-between items-center">
      <img className="w-6 mr-2" src={toggle ? lightOff : lightOn} alt="light theme" />
      <Switch
        checked={toggle}
        onChange={toggleDarkMode}
        onColor="rgb(207,216,220)"
        offColor="rgb(207,216,220)"
      />
      <img className="w-6 ml-2" src={toggle ? darkOn : darkOff} alt="dark theme" />
    </div>
  )
}

export default ThemeSwitcher;