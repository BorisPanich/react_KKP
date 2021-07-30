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

// export const WithOutValueSelect = Template.bind({});
export const WithOutValueSelect: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState(null);
    return <Select {...args} value={value} onChange={setValue} />
}
WithOutValueSelect.args = {
    onChange: callbackAction,
    items: [
        { value: 1, title: 'Mensk' },
        { value: 2, title: 'Kiev' },
        { value: 3, title: 'Moscow' },
    ]
}

export const WithValueSelect: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState<number>(2);
    return <Select {...args} value={value} onChange={setValue} />
}
WithValueSelect.args = {
    onChange: callbackAction,
    items: [
        { value: 1, title: 'Mensk' },
        { value: 2, title: 'Kiev' },
        { value: 3, title: 'Moscow' },
    ]
}