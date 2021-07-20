import React, { useState } from 'react';

type OnOffPropsType = {
    on: boolean
    onClick: (on: boolean) => void
}

function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        pading: "2px",
        backgroundColor: props.on ? "green" : "white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        pading: "2px",
        marginLeft: "5px",
        backgroundColor: props.on ? "white" : "red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "25px",
        border: "1px solid black",
        display: "inline-block",
        pading: "2px",
        marginLeft: "5px",
        backgroundColor: props.on ? "yellow" : "white"
    }


    return (
        <div >
            <div style={onStyle} onClick={() => { props.onClick(true) }}>On</div>
            <div style={offStyle} onClick={() => { props.onClick(false) }} >Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

}

export default OnOff;