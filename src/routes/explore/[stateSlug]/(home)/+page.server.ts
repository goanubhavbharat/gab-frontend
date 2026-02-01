import { PRIVATE_API_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, parent }) => {

    const layoutData = await parent();
    const seo = layoutData.tabs.filter((tab: any) => tab.link === layoutData.lastPath)[0]?.seo;

    const response = await fetch(`${PRIVATE_API_URL}/gg/v1/states/${params.stateSlug}`)
    const data = await response.json()

    switch (response.status) {
        case 200:
            return {
                name: data.name,
                info: data.info,
                images: data.images,
                regions: data?.stateRegions,
                districts: data.topDistricts,
                seo: seo
            }
        default:
            return {}
    }
}