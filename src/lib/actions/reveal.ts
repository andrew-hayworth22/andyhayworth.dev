const HIDDEN_CLASSES = ['opacity-0', 'translate-y-5.5'];

export function reveal(node: HTMLElement) {
	if (typeof IntersectionObserver === 'undefined') {
		node.classList.remove(...HIDDEN_CLASSES);
		return {};
	}

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.remove(...HIDDEN_CLASSES);
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
	);

	observer.observe(node);

	return {
		destroy() {
			observer.disconnect();
		}
	};
}
