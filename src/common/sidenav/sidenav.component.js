import React from 'react'

import { IconContext } from 'react-icons'
import { FiMoon } from 'react-icons/fi'
import { RiSunLine } from 'react-icons/ri'
import { DARK_THEME, DARK_THEME_SECONDARY_BACKGROUND_COLOR, 
  LIGHT_THEME_SECONDARY_BACKGROUND_COLOR
} from '../../constants/variables.constant'

import Switch from '../switch/switch.component'

import './sidenav.component.scss'

export default function SideNav (props) {
  const { appTheme, switchChangeCallback } = props
  const isDarkTheme = appTheme === DARK_THEME

  return (
    <div
      className='sidenav-wrapper'
      style={{backgroundColor: isDarkTheme 
        ? DARK_THEME_SECONDARY_BACKGROUND_COLOR 
          : LIGHT_THEME_SECONDARY_BACKGROUND_COLOR}}
    >
      <div className='header-wrapper'>

      </div>
      <div className='menu-option-list'>

      </div>
      <div className='footer-wrapper'>
        <IconContext.Provider value={{ color: '#939393', size: 26 }}>
          {isDarkTheme ? <FiMoon /> : <RiSunLine />}
        </IconContext.Provider>
        <Switch
          {...props}
          switchChangeCallback={switchChangeCallback}
        />
      </div>
      
    </div>
  )
}