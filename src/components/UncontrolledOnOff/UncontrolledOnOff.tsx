import React, { useState } from 'react';

type UncontrolledOnOffPropsType = {
    defaultOn?: boolean
    onClick: (on: boolean) => void
}

export const UncontrolledOnOff = React.memo(function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);

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

    const onClicked = () => {
        setOn(true)
        props.onClick(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onClick(false)
    }

    return (
        <div >
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked} >Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )

})