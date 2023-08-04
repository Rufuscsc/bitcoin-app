import React, { useState } from 'react'
import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header'
import Card from './Card'
import DurationList from './DurationList'
import BuySell from './BuySell';
import Footer from './Footer';
import Overlay from './Overlay';
import BuySellBtn from './BuySellBtn';
import RechartsCard from './RechartsCard';
import DurationChart from './DurationChart';


const Phone = () => {
    const [isClick, setIsClick] = useState(false);
    const [isArrowClick, setIsArrowClick] = useState(false);


    function handleClick(data){
        setIsClick(data);
    }
    function handleArrowClick(status){
        setIsArrowClick(status)
    }

    const daydata = [
        {price: 36},
        {price: 45},
        {price: 43},
        {price: 49},
        {price: 52},
        {price: 51},
        {price: 54},
        {price: 50},
        {price: 49},
        {price: 52},
        
    ]
    const weekdata = [
        {price: 35},
        {price: 38},
        {price: 44},
        {price: 41},
        {price: 39},
        {price: 43},
        {price: 40},
        {price: 42},
        {price: 41},
        {price: 45},
        
    ]
    const monthdata = [
        {price: 53},
        {price: 58},
        {price: 47},
        {price: 49},
        {price: 69},
        {price: 43},
        {price: 46},
        {price: 48},
        {price: 44},
        {price: 46},
        
    ]
    const yeardata = [
        {price: 47},
        {price: 51},
        {price: 77},
        {price: 63},
        {price: 57},
        {price: 63},
        {price: 65},
        {price: 69},
        {price: 66},
        {price: 68},
        
    ]

  return (
    <div className='Phone'>
        <div className="inside">
            <Router>
            
            <Header handleClick={handleClick}/>
            <div className='newInner' style={{position: 'relative'}}>
                <Overlay isClick={isClick}/>
                
                <Card handleArrowClick={handleArrowClick}/>
                <BuySellBtn status={isArrowClick}/>
                
                
                    {/* <Switch>
                    <Route exact path='/day'>
                        <RechartsCard data={daydata} />
                    </Route>
                    <Route exact path='/'>
                        <RechartsCard data={weekdata} />
                    </Route>
                    <Route exact path='/month'>
                        <RechartsCard data={monthdata} />
                    </Route>
                    <Route exact path='/year'>
                        <RechartsCard data={yeardata} />
                    </Route>
                    </Switch> */}
                    <Switch>
                        <Route exact path='/'>
                            <DurationChart dayData={daydata} weekData={weekdata} monthData={monthdata} yearData={yeardata}/>
                        </Route>
                        <Route path='/:duration'>
                            <DurationChart dayData={daydata} weekData={weekdata} monthData={monthdata} yearData={yeardata}/>
                        </Route>
                    </Switch>
                
                <BuySell/>
                
            </div>
            <Footer />
            </Router>
        </div>
    </div>
  )
}

export default Phone