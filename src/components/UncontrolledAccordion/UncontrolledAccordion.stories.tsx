import React, { useState } from 'react';
import {action} from '@storybook/addon-actions';
import {UncontrolledAccordion} from './UncontrolledAccordion';

export default {
    title: 'UncontrolledAccordion',
    component: UncontrolledAccordion,
}

const callbackAction = action('event fired')

export const TitleCollapsedMode = () => <UncontrolledAccordion titleValue={"Uncontrolled"} />

