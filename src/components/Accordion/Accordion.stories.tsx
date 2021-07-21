import React, { useState } from 'react';
import {action} from '@storybook/addon-actions';
import Accordion from './Accordion';

export default {
    title: 'Accordion',
    component: Accordion,
}

const callbackAction = action('event fired')

export const MenuCollapsedMode = () => <Accordion titleValue={"Menu"} colapsed={true} onChange={callbackAction} />
export const UsersUnCollapsedMode = () => <Accordion titleValue={"Users"} colapsed={false} onChange={callbackAction} />
export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion titleValue={"Users"} colapsed={value} onChange={() => {setValue(!value)}} />
}
