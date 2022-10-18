import React from 'react';
import {Switch, SwitchProps} from 'react-native'

import GenSwitchStyles from './GenSwitchStyles';

export interface GenSwitchProps {
    testID?: string
    switchProps: SwitchProps,
}

const GenSwitch: React.FC<GenSwitchProps> = ({testID = 'gen-switch', switchProps}) => {
    return <Switch {...switchProps}/>
}

export default GenSwitch;