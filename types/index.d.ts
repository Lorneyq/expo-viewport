declare module 'expo-viewport' {
	/**
	 * Calculates the value in viewport width units (vw).
	 * @param number The percentage of viewport width.
	 */
	export function vw(number: number): number;

	/**
	 * Calculates the value in viewport height units (vh).
	 * @param number The percentage of viewport height.
	 */
	export function vh(number: number): number;

	/**
	 * Calculates the value in "adjusted" viewport height units (lvh), considering status bar height.
	 * @param number The percentage of adjusted viewport height.
	 */
	export function lvh(number: number): number;

	/**
	 * Calculates the maximum of viewport width and height units (vmax).
	 * @param number The percentage of the maximum of viewport width and height.
	 */
	export function vmax(number: number): number;

	/**
	 * Calculates the minimum of viewport width and height units (vmin).
	 * @param number The percentage of the minimum of viewport width and height.
	 */
	export function vmin(number: number): number;
}
