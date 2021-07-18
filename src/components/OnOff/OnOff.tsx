import React, { useState } from 'react';

type OnOffPropsType = {
    // on: boolean
}

function OnOff(props: OnOffPropsType) {

const [on, setOne] = useState<boolean>(false);

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        pading: "2px",
        backgroundColor: on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        pading: "2px",
        marginLeft: "5px",
        backgroundColor: on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "25px",
        border: "1px solid black",
        display: "inline-block",
        pading: "2px",
        marginLeft: "5px",
        backgroundColor: on ? "yellow" : "white"
    }

    // const onOffStyle = {
    //     margin: "0",
    //     position: "absolute",
    //     top: "50 %",
    //     left: "50 %",
    //     marginRight: "-50 %",
    //     transform: "translate(-50 %, -50 %)"
    // }

    return (
        <div >
            <div style={onStyle} onClick={() => {setOne(true)}}>On</div>
            <div style={offStyle} onClick={() => {setOne(false)}} >Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}

export default OnOff;