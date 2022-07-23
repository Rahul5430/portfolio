import { getPlaiceholder } from 'plaiceholder';
import React from 'react';
import About from '../components/sections/About';
import Contact from '../components/sections/Contact';
import Experience from '../components/sections/Experience';
import Landing from '../components/sections/Landing';
import MoreProjects from '../components/sections/MoreProjects';
import Projects from '../components/sections/Projects';
import styles from '../styles/Home.module.css';

export const getStaticProps = async () => {
	const data = await Promise.all([
		getPlaiceholder('/me.jpg'),
		getPlaiceholder('/stockWatchlist.png'),
		getPlaiceholder('/optionStrategyBuilder.png'),
		getPlaiceholder('/toDoList.png'),
		getPlaiceholder('/keeperApp.png'),
		getPlaiceholder('/weatherApp.png'),
	]);

	return {
		props: {
			imageData: data.map((item) => ({
				...item.img,
				blurDataURL: item.base64,
			})),
		},
	};
};

export default function Home({ imageData }) {
	return (
		<div className={styles.container}>
			<Landing />
			<About imageProps={imageData[0]} />
			<Experience />
			<Projects imageProps={imageData.slice(1, 6)} />
			<MoreProjects />
			<Contact />
		</div>
	);
}
