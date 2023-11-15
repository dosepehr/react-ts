import React from 'react';
import { IconType } from './Icons.types';

const Icon: React.FC<React.PropsWithChildren<IconType>> = ({
    children,
    svg,
    png,
    position,
}) => {
    return <div>{children}</div>;
};

export default Icon;
