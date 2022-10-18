import React from 'react';
import {Image, ImageProps} from 'react-native'

import GenImageStyles from './GenImageStyles';

export interface GenImageProps {
    testID?: string
    imageProps: ImageProps,
}

const GenImage: React.FC<GenImageProps> = ({
    testID = 'gen-image',
    imageProps
}) => {
    return <Image {...imageProps}/>
}

export default GenImage;