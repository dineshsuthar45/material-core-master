module.exports = {
	plugins: [
		{
			name: 'preset-default',
		},
		'removeStyleElement',
		'convertStyleToAttrs',
		{
			name: 'removeAttrs',
			params: {
				attrs: '(style|fill|width|height)',
			},
		},
	],
};
