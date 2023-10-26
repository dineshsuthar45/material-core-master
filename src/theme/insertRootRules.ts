type RecursiveObject = { [key: string]: string | RecursiveObject };

export const insertRootRules = (js: RecursiveObject, prefix: string = '') => {
	if (document) {
		Object.keys(js).forEach((key) => {
			const value = js[key];
			if (typeof value === 'string') {
				document.documentElement.style.setProperty(`--m-${prefix ? prefix + '-' : ''}${key}`, value);
			} else {
				insertRootRules(value, `${prefix}-${key}`);
			}
		});
	}
};
