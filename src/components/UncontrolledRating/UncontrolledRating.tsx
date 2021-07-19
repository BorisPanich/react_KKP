import React, { useState } from 'react';

type UncontrolledRatingPropsType = {}

function UncontrolledRating(props: UncontrolledRatingPropsType) {

    const [value, setValue] = useState(0);

    return (
        <div>
            <Star selected={value > 0} /> <button onClick={() => { setValue(1) }} ></button>
            <Star selected={value > 1} /><button onClick={() => { setValue(2) }} ></button>
            <Star selected={value > 2} /><button onClick={() => { setValue(3) }} ></button>
            <Star selected={value > 3} /><button onClick={() => { setValue(4) }} ></button>
            <Star selected={value > 4} /><button onClick={() => { setValue(5) }} ></button>
        </div>
    )

}

type StarPropsType = {
    selected: boolean
}

function Star(props: StarPropsType) {
    if (props.selected === true) {
        return <span><b>- star -</b> </span>
    } else {
        return <span>- star -</span>
    }
}

export default UncontrolledRating;