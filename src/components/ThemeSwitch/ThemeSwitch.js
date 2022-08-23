import React, { useContext } from "react";
import { Button } from "../Button";
import { DarkModeContext } from "../Context";

export function ThemeSwitch() {
    const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
    const handleClick = () => {
        toggleDarkMode();
    }
    return (
        <h5 className='theme-switch' onClick={handleClick}>*</h5>
    )
}