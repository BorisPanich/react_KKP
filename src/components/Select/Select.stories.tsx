import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import { getCategoryObj } from '../Accordion/Accordion.stories';
import { Select } from './Select';

export default {
    title: 'Select',
    component: Select,
    argTypes: {
        /** group props params */
        color: {
            /** add a header color */
            control: 'color',
            ...getCategoryObj('Color')
        },
        onChange: {
            ...getCategoryObj('Events')
        },
        title: {
            ...getCategoryObj('Main')
        }
    }
} as ComponentMeta<typeof Select>;

const callbackAction = action('event fired');

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />

export const WithOutValueSelect = Template.bind({});
WithOutValueSelect.args = {
    onChange: callbackAction,
    items: [
        { value: 1, title: 'Lida' },
        { value: 2, title: 'Grodno' },
        { value: 3, title: 'Mensk' },
    ]
}

export const WithValueSelect: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState<number>(0);
    return <Select {...args} value={value} onChange={setValue} />
}
WithValueSelect.args = {
    onChange: callbackAction,
    items: [
        { value: 1, title: 'Lida' },
        { value: 2, title: 'Grodno' },
        { value: 3, title: 'Mensk' },
    ]
}