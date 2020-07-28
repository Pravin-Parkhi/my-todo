import { connect } from 'react-redux'
import React, { useState } from 'react'

import './profile.component.scss'

function Profile (props) {

  return (
    <div className='profile-wrapper'>
      profile
    </div>
  )
}

function mapStateToProps (state) {
  return {}
}

export default (connect(mapStateToProps, {  })(Profile))