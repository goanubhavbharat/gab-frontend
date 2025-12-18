import type { PageServerLoad } from "./$types";

export const load: PageServerLoad= async ({ cookies }) => {

    const token = cookies.get("sessionId")
    if (token) {
        // delete token from cookies
        cookies.delete("sessionId", {path: '/'})
        // call api to delete session from backend server
    }

    return {}
}