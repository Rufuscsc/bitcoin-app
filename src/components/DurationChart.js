import React, { useState } from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import DurationList from './DurationList';
import RechartsCard from './RechartsCard';

const DurationChart = ({dayData, weekData, monthData, yearData}) => {

    var duration = useParams();

    return (
        <>
            <DurationList active={duration.duration} />
            {(duration.duration === 'day') && <RechartsCard data={dayData}/>}
            {(duration.duration === undefined) && <RechartsCard data={weekData}/>}
            {(duration.duration === 'month') && <RechartsCard data={monthData}/>}
            {(duration.duration === 'year') && <RechartsCard data={yearData}/>}
        </>
    )
}

export default DurationChart