import { useState, useEffect } from 'react';

const useOnScreen = (ref) => {
	const [isIntersecting, setIsIntersecting] = useState(false);

	useEffect(() => {
		const observer = new IntersectionObserver(([entry]) => {
			setIsIntersecting(entry.isIntersecting);
		});

		if (ref.current) {
			observer.observe(ref.current);
		}
	}, []);

	return isIntersecting;
};

export default useOnScreen;
