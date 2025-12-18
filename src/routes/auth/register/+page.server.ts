import { redirect } from '@sveltejs/kit';
import type { Actions, PageServerLoad } from './$types';
import { PRIVATE_API_URL } from '$env/static/private';

export const actions: Actions = {
    zoho: async() => {
        throw redirect(302, `${PRIVATE_API_URL}/auth/v1/oauth/zoho/init`);
    },
    google: async() => {
        throw redirect(302, `${PRIVATE_API_URL}/auth/v1/oauth/google/init`);
    }
}

export const load: PageServerLoad = async({ cookies }) => {
    const token = cookies.get("sessionId")
    if (token) {
        throw redirect(302, '/');
    }
}
