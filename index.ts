import Constants from 'expo-constants';
import { Dimensions } from 'react-native';

// Viewport Width
export const vw = (number: number) =>
	Dimensions.get('window').width * (number / 100);

// Viewport Height
export const vh = (number: number) =>
	Dimensions.get('window').height * (number / 100);
export const lvh = (number: number) =>
	(Dimensions.get('window').height - Constants.statusBarHeight) *
	(number / 100);

// Viewport Maximum & Viewport Minimum
export const vmax = (number: number) =>
	Math.max(
		Dimensions.get('window').width * (number / 100),
		Dimensions.get('window').height * (number / 100)
	);
export const vmin = (number: number) =>
	Math.min(
		Dimensions.get('window').width * (number / 100),
		Dimensions.get('window').height * (number / 100)
	);
