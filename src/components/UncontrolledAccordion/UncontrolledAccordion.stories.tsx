import React from 'react';
import { action } from '@storybook/addon-actions';
import { UncontrolledAccordion } from './UncontrolledAccordion';
import { ComponentStory } from '@storybook/react';

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callbackAction = action('event fired')

const Template: ComponentStory<typeof UncontrolledAccordion> = (args) => <UncontrolledAccordion titleValue={"Uncontrolled"} />

// export const TitleCollapsedMode = () => <UncontrolledAccordion titleValue={"Uncontrolled"} />
export const TitleCollapsedMode = Template.bind({});
TitleCollapsedMode.args = {
    titleValue: "UncontrolledAccordion"
}

