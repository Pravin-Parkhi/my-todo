import React from 'react'
import { connect } from 'react-redux'
import { setAppTheme } from '../../actions/index'
import { DARK_THEME_PRIMARY_BACKGROUND_COLOR, 
  LIGHT_THEME_PRIMARY_BACKGROUND_COLOR, DARK_THEME 
} from '../../constants/variables.constant'

import Sidenav from '../sidenav/sidenav.component'

import './base-layout.component.scss'

function BaseLayout (props) {
  const { appTheme, setAppTheme } = props
  const isDarkTheme = appTheme === DARK_THEME

  const handleChange = () => {
    setAppTheme()
  }

  return (
    <div className='base-layout-wrapper'>
      <Sidenav {...props} switchChangeCallback={handleChange} />
      <div
        className='view-wrapper'
        style={{backgroundColor: isDarkTheme 
          ? DARK_THEME_PRIMARY_BACKGROUND_COLOR 
            : LIGHT_THEME_PRIMARY_BACKGROUND_COLOR}}
      >
          {props.children}
      </div>
    </div>
  )
}

function mapStateToProps (state) {
  return {
    appTheme: state.app.appTheme
  }
}

export default (connect(mapStateToProps, { setAppTheme })(BaseLayout))