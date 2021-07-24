import { action } from '@storybook/addon-actions';
import { ComponentStory, Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { OnOff, OnOffPropsType } from './OnOff';

export default {
    title: 'OnOff',
    component: OnOff,
    argTypes: {
        /** group props params */
        onClick: {
            table: {
                category: 'Events'
            }
        }
    }
} as Meta;

const callbackAction = action('event fired')

const Template: ComponentStory<typeof OnOff> = (args) => <OnOff {...args} />

export const OnMode = Template.bind({});
OnMode.args = {
    on: true,
    onClick: callbackAction
}
export const OffMode = Template.bind({});
OffMode.args = {
    on: false,
    onClick: callbackAction
}
export const ModeChanginOnOff: Story<OnOffPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false);
    return <OnOff {...args} on={value} onClick={setValue} />
}
ModeChanginOnOff.args = {
    onClick: callbackAction
}
