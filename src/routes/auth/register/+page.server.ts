import { redirect } from '@sveltejs/kit';
import type { Actions } from './$types';
import { PRIVATE_API_URL } from '$env/static/private';

export const actions: Actions = {
    zoho: async() => {
        throw redirect(302, `${PRIVATE_API_URL}/auth/v1/oauth/zoho/login`);
    },
    google: async() => {
        throw redirect(302, `${PRIVATE_API_URL}/auth/v1/oauth/google/login`);
    }
}
