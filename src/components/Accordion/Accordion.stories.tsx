import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Accordion, AccordionPropsType } from './Accordion';
import { Meta, Story } from '@storybook/react';

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
} as Meta;

const callbackAction = action('event fired')

const Template: Story<AccordionPropsType> = (args) =>
    <Accordion {...args} />;

export const MenuCollapsedMode = Template.bind({});
MenuCollapsedMode.args = {
    titleValue: "Menu",
    colapsed: true,
    onChange: callbackAction
};

export const UsersUnCollapsedMode = Template.bind({});
UsersUnCollapsedMode.args = {
    titleValue: "Users",
    colapsed: false,
    onChange: callbackAction
};

// export const ModeChanging = () => {
//     const [value, setValue] = useState<boolean>(false);
//     return <Accordion titleValue={"Users"} colapsed={value} onChange={() => { setValue(!value) }} />
// }
export const ModeChangingAccordion: Story<AccordionPropsType> = (args) => {
    const [value, setValue] = useState<boolean>(false);
    return <Accordion {...args}
        colapsed={value}
        onChange={() => {
            setValue(!value)
        }} />
}
ModeChangingAccordion.args = {
    titleValue: "Users"
}

