import React, { useState } from 'react'
import Duration from './Duration'
import { Link } from 'react-router-dom';

const DurationList = ({active}) => {

  return (
    <div className="DurationList">

        <Link to='/day'><div className='Duration' id={(active === 'day')? 'active': ''} >Day</div></Link>
        <Link to='/'><div className='Duration' id={(active === undefined)? 'active': ''} >Week</div></Link>
        <Link to='/month'><div className='Duration' id={(active === 'month')? 'active': ''} >Month</div></Link>
        <Link to='/year'><div className='Duration' id={(active === 'year')? 'active': ''} >Year</div></Link>
    </div>
  )
}

export default DurationList