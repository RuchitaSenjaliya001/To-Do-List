import React from 'react'

export default function Date(props) {
    const month = props.date.toLocaleString("en-US", { month: 'long' });
    const day = props.date.toLocaleString("en-US", { day: '2-digit' });
    const year = props.date.getFullYear();

    
    return (
        <div className="bg-[#8EA7E9] px-3 rounded-lg">
            
            <div className="text-base">{month}</div>
            <div className="text-3xl">{day}</div>
            <div className="text-sm">{year}</div>
        </div>
    )
}
