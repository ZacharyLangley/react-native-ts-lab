import React from 'react';
import {Switch, SwitchProps} from '@rneui/themed'

import GenSwitchStyles from './GenSwitchStyles';

export interface GenSwitchProps extends SwitchProps {}

const GenSwitch: React.FC<GenSwitchProps> = ({testID = 'gen-switch', ...switchProps}) => {
    return <Switch {...switchProps}/>
}

export default GenSwitch;