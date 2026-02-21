import { PRIVATE_API_URL } from "$env/static/private";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ url, params }) => {

    const segments = url.pathname.split('/').filter(Boolean);
    const lastPath = segments[segments.length - 1];

    const response = await fetch(`${PRIVATE_API_URL}/ui/v1/districts/${params.districtSlug}`)
    const data = await response.json()

    switch (response.status) {
        case 200:
            return {
                district: data.district,
                state: data.state,
                title: data.title,
                tabs: data.tabs,
                seo: data.tabs.find((tab: { link: string }) => tab.link === lastPath)?.seo,
                lastPath: lastPath,
            }
        default:
    }
}