import { PRIVATE_API_URL } from "$env/static/private";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url, params }) => {

    const segments = url.pathname.split('/').filter(Boolean);
    const lastPath = segments[segments.length - 1];

    if (params.regionSlug) {
        const response = await fetch(`${PRIVATE_API_URL}/gg/v1/states-regions/${params.regionSlug}/ui`)
        const data = await response.json()

        switch (response.status) {
            case 200:
                return {
                    name: data.stateRegion,
                    state: data.state,
                    title: data.title,
                    tabs: data.tabs,
                    lastPath: lastPath,
                }
            default:
                return {}
        }
    }

    const response = await fetch(`${PRIVATE_API_URL}/gg/v1/states/${params.stateSlug}/ui`)
    const data = await response.json()

    switch (response.status) {
        case 200:
            return {
                name: data.state,
                title: data.title,
                tabs: data.tabs,
                lastPath: lastPath,
            }
        default:
            return {}
    }
}