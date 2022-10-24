import { getPlaiceholder } from 'plaiceholder';
import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
// import About from '../components/sections/About';
// import Contact from '../components/sections/Contact';
// import Experience from '../components/sections/Experience';
const Contact = dynamic(() => import('../components/sections/Contact'));
const Experience = dynamic(() => import('../components/sections/Experience'));
const MoreProjects = dynamic(() => import('../components/sections/MoreProjects'));
const Projects = dynamic(() => import('../components/sections/Projects'));
const About = dynamic(() => import('../components/sections/About'));
// const Landing = dynamic(() => import('../components/sections/Landing'));
import Landing from '../components/sections/Landing';
// import Landing from '../components/sections/Landing';
// import MoreProjects from '../components/sections/MoreProjects';
// import Projects from '../components/sections/Projects';
import styles from '../styles/Home.module.css';
import useOnScreen from '../hooks/useOnScreen';

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
	const childRefs = {
		// LandingRef: useRef(),
		AboutRef: useRef(),
		ExperienceRef: useRef(),
		ProjectsRef: useRef(),
		MoreProjectsRef: useRef(),
		ContactRef: useRef(),
	};
	const childRefValues = {
		// LandingRef: useOnScreen(childRefs.LandingRef),
		AboutRef: useOnScreen(childRefs.AboutRef),
		ExperienceRef: useOnScreen(childRefs.ExperienceRef),
		ProjectsRef: useOnScreen(childRefs.ProjectsRef),
		MoreProjectsRef: useOnScreen(childRefs.MoreProjectsRef),
		ContactRef: useOnScreen(childRefs.ContactRef),
	};
	const [isChildRef, setIsChildRef] = useState({
		// LandingRef: false,
		AboutRef: false,
		ExperienceRef: false,
		ProjectsRef: false,
		MoreProjectsRef: false,
		ContactRef: false,
	});

	// useEffect(() => {
	// 	if (!isChildRef.LandingRef) {
	// 		setIsChildRef({
	// 			...isChildRef,
	// 			LandingRef: childRefValues.LandingRef,
	// 		});
	// 	}
	// }, [childRefValues.LandingRef]);

	useEffect(() => {
		if (!isChildRef.AboutRef) {
			setIsChildRef({ ...isChildRef, AboutRef: childRefValues.AboutRef });
		}
	}, [childRefValues.AboutRef]);

	useEffect(() => {
		if (!isChildRef.ExperienceRef) {
			setIsChildRef({
				...isChildRef,
				ExperienceRef: childRefValues.ExperienceRef,
			});
		}
	}, [childRefValues.ExperienceRef]);

	useEffect(() => {
		if (!isChildRef.ProjectsRef) {
			setIsChildRef({
				...isChildRef,
				ProjectsRef: childRefValues.ProjectsRef,
			});
		}
	}, [childRefValues.ProjectsRef]);

	useEffect(() => {
		if (!isChildRef.MoreProjectsRef) {
			setIsChildRef({
				...isChildRef,
				MoreProjectsRef: childRefValues.MoreProjectsRef,
			});
		}
	}, [childRefValues.MoreProjectsRef]);

	useEffect(() => {
		if (!isChildRef.ContactRef) {
			setIsChildRef({
				...isChildRef,
				ContactRef: childRefValues.ContactRef,
			});
		}
	}, [childRefValues.ContactRef]);

	return (
		<div className={styles.container}>
			{/* <div ref={childRefs.LandingRef}>
				{isChildRef.LandingRef && <Landing />}
			</div> */}
			<Landing />
			<div ref={childRefs.AboutRef}>
				{isChildRef.AboutRef && <About imageProps={imageData[0]} />}
			</div>
			<div ref={childRefs.ExperienceRef}>
				{isChildRef.ExperienceRef && <Experience />}
			</div>
			<div ref={childRefs.ProjectsRef}>
				{isChildRef.ProjectsRef && (
					<Projects imageProps={imageData.slice(1, 6)} />
				)}
			</div>
			<div ref={childRefs.MoreProjectsRef}>
				{isChildRef.MoreProjectsRef && <MoreProjects />}
			</div>
			<div ref={childRefs.ContactRef}>
				{isChildRef.ContactRef && <Contact />}
			</div>
		</div>
	);
}
