import React from 'react';
import {BarContainer, BarLabelType, BarLabelValue, BarWrapper, Bar, TextContent} from './styles'

const StatsBar = ({ label, value, color }) => (
    <BarContainer>
        <BarLabelType>
            <TextContent>{label}</TextContent>
        </BarLabelType>
        <BarWrapper>
            <Bar value={value} type={color} />
        </BarWrapper>
        <BarLabelValue>
            <TextContent>{value}</TextContent>
        </BarLabelValue>
    </BarContainer>
);

export { StatsBar };
