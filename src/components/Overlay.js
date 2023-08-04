import React, { useEffect, useState } from 'react'

const Overlay = ({isClick}) => {
  

  return (
    <>
      <div className="side-box" id='side-box' style={{animationName: isClick ? 'slide-down': 'slide-up', display: isClick ? 'flex': 'none'}}>
          <div className="list">Edit <i className='bx bx-folder-minus'></i></div>
          <div className="list">Courier Info <i className='bx bxs-minus-square'></i></div>
          <div className="list">Share <i className='bx bx-arrow-from-bottom'></i></div>
          <div className="list">Remove <i className='bx bx-minus-circle'></i></div>
      </div>
    </>
  )
}

export default Overlay