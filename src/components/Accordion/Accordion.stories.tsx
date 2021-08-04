import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React, { useState } from 'react';
import Accordion from './Accordion';

export type ParamCategoryType = 'Color' | 'Events' | 'Main';

export const getCategoryObj = (paramCategory: ParamCategoryType) => ({
    table: { category: paramCategory }
})

export default {
    title: 'Accordion',
    component: Accordion,
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
} as ComponentMeta<typeof Accordion>;

const callbackAction = action('event fired');
const onClickCallback = action('same items was clicked');

const Template: ComponentStory<typeof Accordion> = (args) =>
    <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: "Menu",
    colapsed: true,
    onChange: callbackAction,
    items: [],
    onClick: onClickCallback
};

export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    titleValue: "Users",
    colapsed: false,
    onChange: callbackAction,
    items: [{ title: 'Boris', value: 1 }, { title: 'Olga', value: 2 }, { title: 'Gleb', value: 3 }],
    onClick: onClickCallback
};

export const ModeChangingAccordion: ComponentStory<typeof Accordion> = (args) => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion {...args}
        colapsed={value}
        onChange={() => {
            setValue(!value)
        }}
    />
}
ModeChangingAccordion.args = {
    titleValue: "Users",
    items: [{ title: 'Boris', value: 1 }, { title: 'Olga', value: 2 }, { title: 'Gleb', value: 3 }],
    onClick: (id) => { alert(`my ${id} was clicked`) }
}

