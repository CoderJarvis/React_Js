import React from 'react'

export default function App17() {
    const curDate=new Date();
    const currHour=curDate.getHours();
    let st;
    let cssStyle={

    };
    if(currHour>=1 && currHour<=12){
        st="Good Morning";
        cssStyle.color="green";
    }
    else if(currHour>=12 && currHour<=18){
        st="Good Afternoon";
        cssStyle.color="red";
    }
    else{
        st="Godd Night";
        cssStyle.color="orange";
    }
    return (
        <>
            <h1>Heloo Saswat... <span style={cssStyle}>{st} </span> !!!</h1>
        </>
    )
}
