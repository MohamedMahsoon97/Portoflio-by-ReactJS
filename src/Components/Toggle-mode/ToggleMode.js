import React , { useContext } from 'react'
import Sun from "../../Images/sun.png";
import Moon from "../../Images/moon.png";
import "./ToggleMode.css"
export const ToggleMode = () => {
      return (
            <div className="toggle-mode">
                  <img src={Sun} alt="" className="toggle-icon" />
                  <img src={Moon} alt="" className="toggle-icon" />
                  <div className="toggle-button"></div>
            </div>
      )
}
