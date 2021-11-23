import type { RequestHandler } from "@sveltejs/kit";
import fs from 'fs';

export const get: RequestHandler = async ({ params }) => {
    const { className } = params;
    const file = `src/overviews/${className}.md`;
    const content = fs.readFileSync(file, 'utf8');
    return {
        body: {
            content
        },
    };
}