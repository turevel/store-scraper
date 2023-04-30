import { DefaultTheme } from 'styled-components';

const accentColors = {
	accentPrimary: '#00838F',
	accentSecondary: '#0097A7',
	accentTertiary: '#00ACC1',
};

export const light: DefaultTheme = {
	colors: {
		...accentColors,
		background: '#ffffff',
		primary: '#fafafa',
		secondary: '#f5f5f5',
		tertiary: '#f0f0f0',
		quaternary: '#ebebeb',
		font: '#050505',
		fontLight: '#fafafa',
		fontDark: '#050505',
	}
};

export const dark: DefaultTheme = {
	colors: {
		...accentColors,
		background: '#000000',
		primary: '#0a0a0a',
		secondary: '#0f0f0f',
		tertiary: '#141414',
		quaternary: '#191919',
		font: '#fafafa',
		fontLight: '#fafafa',
		fontDark: '#050505',
	}
};
