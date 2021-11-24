import type { RequestHandler } from '@sveltejs/kit';
import * as fs from 'fs/promises';

export const get: RequestHandler = async ({ params }) => {
	const { className } = params;
	const file = `src/overviews/${className}.md`;
	const content = await fs.readFile(file, 'utf8');
	return {
		body: {
			content,
		},
	};
};
