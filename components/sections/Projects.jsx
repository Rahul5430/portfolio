import React from 'react';

import ProjectsOverview from '../ProjectsOverview';
import SectionContainer from '../SectionContainer';

export default function MoreProjects({ imageProps }) {
    return (
        <SectionContainer
            id='projects'
            name='projects'
            headerText='Featured Projects'
            useHeaderStyle
        >
            <ProjectsOverview imageProps={imageProps} />
        </SectionContainer>
    );
}