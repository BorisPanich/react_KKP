import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory, Meta } from '@storybook/react';
import React, { useState } from 'react';
import { createBlock } from 'typescript';
import { Clock } from './Clock';

export default {
    title: 'Clock',
    component: Clock,
} as ComponentMeta<typeof Clock>;

const callbackAction = action('event fired');

const Template: ComponentStory<typeof Clock> = (args) =>
    <Clock {...args} />;

export const BaseExemple: ComponentStory<typeof Clock> = (args) => {

    return <Clock {...args} />
}
