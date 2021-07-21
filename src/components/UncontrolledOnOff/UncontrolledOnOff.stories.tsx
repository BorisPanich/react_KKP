import React, { useState } from 'react';
import {action} from '@storybook/addon-actions';
import UncontrolledOnOff from './UncontrolledOnOff';

export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
}

const callbackAction = action('event fired')

export const UncontrolledOnOffMode = () => <UncontrolledOnOff defaultOn={true} onClick={callbackAction} />

