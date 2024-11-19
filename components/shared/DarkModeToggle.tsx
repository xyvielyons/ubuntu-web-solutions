'use client';

import { useDarkMode } from '@/context/DarkModeContext';
import { IoSunnySharp } from "react-icons/io5";
import { RxMoon } from "react-icons/rx";
export default function DarkModeToggle () {
  const { isDark, toggleDarkMode } = useDarkMode();

  return (
    <button
      onClick={toggleDarkMode}
      className="p-2 bg-gray-100 dark:bg-gray-800 rounded-md"
    >
      {isDark ? <RxMoon /> : <IoSunnySharp/>}
    </button>
  );
};
