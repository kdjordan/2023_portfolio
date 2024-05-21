/** @type {import('tailwindcss').Config} */
export default {
	content: [
		// Example content paths...
		'./public/**/*.html',
		'./src/**/*.{js,jsx,ts,tsx,vue}',
	],
	theme: {
		extend: {
			colors: {
				deepPurp: '#61208C',
				lightPurp: '#501D73',
				darkGreen: '#025939',
				springGreen: '#027333',
				highGreen: '#9FF279',
				darkBack: '#000212',
				fontWhite: '#F2EFE9',
				modernBlack: '#28282B',
				canvasBlue: '#79A2F2',
			},
			fontFamily: {
				oswald: ['Oswald', 'sans-serif'],
				geist: ['Geist', 'sans-serif'],
			},
			boxShadow: {
				meteor:
					'0 0 0.125em hsl(0 0% 100% / 0.3), 0 0 0.45em #9FF279',
			},
			fontSize: {
				clampLarge: 'clamp(40px, 8vw, 80px)',
				sizeSm: 'clamp(0.8rem, 0.17vi + 0.76rem, 0.89rem)',
				sizeBase: 'clamp(1rem, 0.34vi + 0.91rem, 1.19rem)',
				sizeLg: 'clamp(1.25rem, 0.61vi + 1.1rem, 1.58rem)',
				sizeXl: 'clamp(1.56rem, 1vi + 1.31rem, 2.11rem)',
				size2xl: 'clamp(1.95rem, 1.56vi + 1.56rem, 2.81rem)',
				size3xl: 'clamp(2.44rem, 2.38vi + 1.85rem, 3.75rem)',
				size4xl: 'clamp(3.05rem, 3.54vi + 2.17rem, 5rem)',
				size5xl: 'clamp(3.81rem, 5.18vi + 2.52rem, 6.66rem)',
				size6xl: 'clamp(4.77rem, 7.48vi + 2.9rem, 8.88rem)',
			},
			backgroundImage: {
				gradientRadial:
					'radial-gradient(ellipse 80% 50% at 50% -20%,rgba(120,119,198,0.3),transparent)',
			},
			borderCustom: {
				guides: '1px solid #027333',
			},
			gridTemplateColumns: {
				skills: 'repeat(2, minmax(140px, 200px))',
			}
		},
	},
	plugins: [],
};
