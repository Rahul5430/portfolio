import {
	GridItem,
	SimpleGrid,
	Text,
	useBreakpointValue,
	useColorModeValue,
	VStack,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { colors } from '../../theme';
import SectionContainer from '../SectionContainer';

const Bio = ({ secondary }) => (
	<GridItem>
		<VStack m='auto' w='75%' spacing='12px' pt='5%'>
			<Text>
				Hi, I&apos;m Rahul! I am a third year student pursuing my
				Bachelors in{' '}
				<strong style={{ color: secondary }}>
					Electronics &amp; Communication Engineering
				</strong>{' '}
				from Punjab Engineering College.
			</Text>
			<Text>
				I&apos;m currently working as a{' '}
				<strong style={{ color: secondary }}>
					Full Stack Web Developer Freelancer
				</strong>{' '}
				since January 2021.
			</Text>
			<Text>
				I enjoy designing &amp; engineering{' '}
				<strong style={{ color: secondary }}>
					efficient full stack and mobile applications
				</strong>
				. I have a{' '}
				<strong style={{ color: secondary }}>passion for coding</strong>
				. I enjoy contributing to{' '}
				<strong style={{ color: secondary }}>
					Open Source Projects
				</strong>{' '}
				and am really enthusiastic about learning new technologies.
			</Text>
		</VStack>
	</GridItem>
);

const HeadShot = ({ imageProps }) => (
	<GridItem>
		<div
			className='image'
			style={{ margin: 'auto', width: '320px', height: '320px' }}
		>
			<Image
				alt='Rahul Sharma'
				src='/me.jpg'
				width={320}
				height={320}
				style={{ margin: 'auto' }}
				placeholder='blur'
				{...imageProps}
				onClick={() => {
					window.open('https://www.linkedin.com/in/rahul5430/');
				}}
			/>
		</div>
	</GridItem>
);

export default function About({ imageProps }) {
	const shouldAlternate = useBreakpointValue({ base: false, md: true });
	const secondary = useColorModeValue(
		colors.secondary.light,
		colors.secondary.dark
	);

	return (
		<SectionContainer
			id='about'
			name='about'
			headerMt='-5%'
			headerText='About Me'
			useHeaderStyle
		>
			<SimpleGrid
				pl='10%'
				pt='5%'
				pr='10%'
				spacing={12}
				columns={[1, null, 2]}
				justifyContent='center'
			>
				{shouldAlternate ? (
					<Bio secondary={secondary} />
				) : (
					<HeadShot imageProps={imageProps} />
				)}
				{shouldAlternate ? (
					<HeadShot imageProps={imageProps} />
				) : (
					<Bio secondary={secondary} />
				)}
			</SimpleGrid>
		</SectionContainer>
	);
}
