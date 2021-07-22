import React, { useState } from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledRating} from './UncontrolledRating';

export default {
    title: 'Uncontrolled Rating',
    component: UncontrolledRating,
}

const callbackAction = action('event fired')

export const UncontrolledRatingChanging = () => <UncontrolledRating defaultValue={0} onClick={callbackAction} />

