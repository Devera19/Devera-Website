import React from 'react'
import "./headerWave.css"

export default function HeaderWave() {
  return (
    <div className='aboutus-header-wave'>
        <img
          src={require ('../../../images/wave-2.png')}
          alt="No internet connection"
        />
    </div>
  )
}
