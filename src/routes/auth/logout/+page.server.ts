import type { PageServerLoad } from "./$types";

export const load: PageServerLoad= async ({ cookies }) => {

    const token = cookies.get("session_token")
    if (token) {
        // delete token from cookies
        cookies.delete("session_token", {path: '/'})
        // call api to delete session from backend server
    }

    return {}
}