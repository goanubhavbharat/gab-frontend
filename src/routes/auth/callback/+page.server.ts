import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad =  async ({ url , cookies, }) => {

    const sessionToken =  cookies.get('sessionId');

    if (!sessionToken) {
        throw error(401, 'Unauthorized: No session token found');
    }

    return {
        firstName: url.searchParams.get("firstName"),
        lastName: url.searchParams.get("lastName"),
    };
};