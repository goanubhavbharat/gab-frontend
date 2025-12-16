import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { goto } from '$app/navigation';

export const load: PageServerLoad =  async ({ url , cookies, }) => {

    const firstName = url.searchParams.get("firstName");
    const lastName = url.searchParams.get("lastName");

    const sessionToken =  cookies.get('session_token');

    if (!sessionToken) {
        throw error(401, 'Unauthorized: No session token found');
    }

    return {
        firstName: firstName,
        lastName: lastName,
    };
};