import React from 'react';
import { action } from '@storybook/addon-actions';
import { UncontrolledOnOff } from './UncontrolledOnOff';
import { ComponentStory } from '@storybook/react';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callbackAction = action('event fired')

// export const UncontrolledOnOffMode = () => <UncontrolledOnOff defaultOn={true} onClick={callbackAction} />
const Template: ComponentStory<typeof UncontrolledOnOff> = (args) =>
    <UncontrolledOnOff defaultOn={true} onClick={callbackAction} />

export const UncontrolledOnOffMode = Template.bind({});
UncontrolledOnOffMode.args = {
    defaultOn: true,
    onClick: callbackAction
}