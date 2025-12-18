import { goto } from "$app/navigation";
import { PRIVATE_API_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    const token = cookies.get("sessionId")
    
    if (token) {
        cookies.delete("sessionId", { path: '/' })
        const pageURL = `${PRIVATE_API_URL}/auth/v1/logout`;
        await fetch(pageURL, {
            method: 'DELETE',
            headers: {
                'cookie': `sessionId=${encodeURIComponent(token)}`,
            },
        });
    }
}