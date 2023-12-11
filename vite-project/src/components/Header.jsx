import { useEffect, useState } from "react";
import MoonIcon from "./Icons/IconMoon";
import SunIcon from "./Icons/IconSun";

const Header = () => {

  const inicialStateDark = localStorage.getItem('theme') === 'dark';

  const [darkMode, setDarkMode] = useState(inicialStateDark);
  
  useEffect(() => {
    if(darkMode){
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
    }
    else{
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [darkMode]);

    return (
        <header className="container mx-auto px-4 pt-8 md:max-w-xl">
          <div className="flex justify-between">
            <h1 className="text-3xl font-senibold uppercase tracking-[0.3em] text-white">Todo</h1>
            <button onClick={() => setDarkMode(!darkMode)}>
              {
                darkMode ? <SunIcon/> : <MoonIcon/>
              } 
            </button>
          </div>
        </header>
    );
};

export default Header;