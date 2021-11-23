export interface Class {
	name: string;
	color: string;
	prettyName?: string;
}

export const classes: Class[] = [
	{
		name: 'lavacaster',
		color: '#FF5252',
	},
	{
		name: 'engineer',
		color: '#FFB949',
	},
	{
		name: 'hunter',
		color: '#56F148',
	},
	{
		name: 'diver',
		color: '#35A7FF',
	},
	{
		name: 'enchanter',
		color: '#9737CA',
	},
	{
		name: 'mine',
		color: '#717171',
		prettyName: 'Miner',
	},
	// {
	//   name: 'parkour', // don't worry about this...
	//   color: '#FF71D4'
	// },
];
