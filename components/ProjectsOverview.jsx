import { Box, Flex, Heading, Text, useBreakpointValue, useColorModeValue } from '@chakra-ui/react';
import { Grid } from '@material-ui/core';
import Image from 'next/image';
import React from 'react';
import Fade from 'react-reveal/Fade';

import projects from '../data/projects';
import { colors } from '../theme';
import LinkIconBar from './LinkIconBar';
import Tech from './Tech';

const Card = ({ name, subtitle, description, links, shouldAlternate }) => {
    const bg = useColorModeValue(colors.bg.light, colors.bg.dark);

    return (
        <Box
            bgColor={bg}
            borderRadius="lg"
            borderWidth={bg === colors.bg.light ? "1px" : ""}
            rounded="md"
            shadow="lg"
            mt={0}
            m="auto"
            mb={3}
            w="75%"
            textAlign="start"
        >
            <Heading as="h1" m={2} p={2} pt={shouldAlternate ? 6 : null}>
                {name}
            </Heading>
            <Text hidden={!subtitle} size="sm" as="strong" m={2} p={2} pb={shouldAlternate ? 6 : null}>
                {subtitle}
            </Text>
            <Text m={2} p={2} pb={shouldAlternate ? 6 : null}>
                {description}
            </Text>
            <LinkIconBar links={links} float="right" mt={0} mr={4} mb={4} />
        </Box>
    );
};

const ProjectContent = ({alternate, shouldAlternate, name, subtitle, description, pic, tech, links, imageProps}) => {
    if (alternate) {
        return (
            <>
                <Card 
                    name={name}
                    subtitle={subtitle}
                    description={description}
                    links={links}
                    shouldAlternate={shouldAlternate}
                />
                <Grid container direction="row" justifyContent="center" spacing={2}>
                    <Tech tech={tech} />
                </Grid>
            </>
        );
    }

    return (
        <div
            className='image'
            style={{ 
                margin: 'auto',
                borderRadius: '3px',
                width: '85%',
				overflow: 'hidden',
            }}
        >
            <Image 
                src={pic}
                alt={`${name} picture`}
				// style={{ margin: 'auto' }}
				placeholder='blur'
                {...imageProps}
                layout='responsive'
                onClick={() => {
                    window.open(links[0].url);
                }}
            />
        </div>
    );
};

const Project = ({ index, shouldAlternate, imageProps, ...props }) => (
    <Fade>
        <Grid container direction="row" style={{ height: shouldAlternate ? '70vh' : null, marginBottom: '2vh' }}>
            <Grid container item xs={12} sm={6}>
                <ProjectContent 
                    alternate={shouldAlternate ? index % 2 === 0 : false}
                    shouldAlternate={shouldAlternate}
                    imageProps={imageProps}
                    {...props}
                />
            </Grid>
            <Grid container item xs={12} sm={6}>
                <ProjectContent 
                    alternate={shouldAlternate ? index % 2 === 1 : true}
                    shouldAlternate={shouldAlternate}
                    imageProps={imageProps}
                    {...props}
                />
            </Grid>
        </Grid>
    </Fade>
);

export default function ProjectsOverview({ imageProps }) {
    const shouldAlternate = useBreakpointValue({base: false, md: true});

    return (
        <Flex pt={12}>
            <Grid container direction="column" justifyContent="center">
                {projects.map((project, index) => (
                    <Project 
                        key={project.name}
                        index={index}
                        shouldAlternate={shouldAlternate}
                        imageProps={imageProps[index]}
                        {...project}
                    />
                ))}
            </Grid>
        </Flex>
    );
};