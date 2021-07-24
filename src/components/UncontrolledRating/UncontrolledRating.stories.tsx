import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { UncontrolledRating } from './UncontrolledRating';
import { ComponentStory } from '@storybook/react';

export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating,
}

const callbackAction = action('event fired')
const Template: ComponentStory<typeof UncontrolledRating> = (args) =>
    <UncontrolledRating defaultValue={0} onClick={callbackAction} />

export const UncontrolledRatingChanging = Template.bind({});
UncontrolledRatingChanging.args = {
    defaultValue: 0,
    onClick: callbackAction
}
// export const UncontrolledRatingChanging = () => <UncontrolledRating defaultValue={0} onClick={callbackAction} />

