import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	verbose: true,
	roots: ['<rootDir>/src'],
	collectCoverageFrom: [
		'src/**/*.{ts,tsx}',
		'!src/**/index.{ts,tsx}',
		'!src/**/*.stories.{ts,tsx}',
		'!src/components/ui/theme/**',
		'!**/*.d.ts',
	],
	coverageThreshold: {
		global: {
			branches: 0,
			functions: 0,
			lines: 0,
			statements: 0,
		},
	},
	transform: {
		'\\.[jt]sx?$': 'ts-jest',
	},
	moduleNameMapper: {
		'\\.(css|sass|scss)$': 'identity-obj-proxy',
	},
	setupFilesAfterEnv: ['<rootDir>/jest-setup.js'],
};

export default config;
