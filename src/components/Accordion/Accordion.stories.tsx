import React, { useState } from 'react';
import Accordion from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
}

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} colapsed={true} onChange={x => x} />
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} colapsed={false} onChange={x => x} />
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion titleValue={"Users"} colapsed={value} onChange={() => {setValue(!value)}} />
}
