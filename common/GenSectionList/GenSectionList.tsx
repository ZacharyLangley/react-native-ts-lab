import React from 'react';
import {SectionList, SectionListProps} from 'react-native';

import GenSectionListStyles from './GenSectionListStyles';

export interface GenSectionListProps {
    testID?: string;
    sectionListProps: SectionListProps<unknown, unknown>
}

const GenSectionList: React.FC<GenSectionListProps> = ({
    testID = 'gen-section-list',
    sectionListProps
}) => {
    return <SectionList {...sectionListProps} />
};

export default GenSectionList;