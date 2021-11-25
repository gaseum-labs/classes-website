export interface Class {
	name: string;
	prettyName: string;
	color: string;
	embedInfo: {
		description: string;
		alt: string;
	};
}

export const classes: Class[] = [
	{
		name: 'lavacaster',
		prettyName: 'Lavacaster',
		color: '#FF5252',
		embedInfo: {
			description: 'The ability overview page for the Lavacaster.',
			alt: 'A white flint and steel icon on a red background.',
		},
	},
	{
		name: 'engineer',
		prettyName: 'Engineer',
		color: '#FFB949',
		embedInfo: {
			description: 'The ability overview page for the Engineer.',
			alt: 'A white redstone icon on an orange background.',
		},
	},
	{
		name: 'hunter',
		prettyName: 'Hunter',
		color: '#56F148',
		embedInfo: {
			description: 'The ability overview page for the Hunter.',
			alt: 'A white compass icon on a light green background.',
		},
	},
	{
		name: 'diver',
		prettyName: 'Diver',
		color: '#35A7FF',
		embedInfo: {
			description: 'The ability overview page for the Diver.',
			alt: 'A white water bucket icon on a light blue background.',
		},
	},
	{
		name: 'enchanter',
		prettyName: 'Enchanter',
		color: '#9737CA',
		embedInfo: {
			description: 'The ability overview page for the Enchanter.',
			alt: 'A white experience bottle icon on a purple background.',
		},
	},
	{
		name: 'mine',
		prettyName: 'Miner',
		color: '#717171',
		embedInfo: {
			description: 'The ability overview page for the Miner.',
			alt: 'A white pickaxe icon on a gray background.',
		},
	},
];
