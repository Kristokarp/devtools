export function onCopy(node: Element, callback: () => void) {
	node.addEventListener('copyComplete', callback);
	return {
		destroy() {
			node.removeEventListener('copyComplete', callback);
		}
	};
}
