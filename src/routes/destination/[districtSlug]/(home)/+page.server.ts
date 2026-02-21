import { PRIVATE_API_URL } from "$env/static/private";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ params, parent }) => {

    const parentData = await parent();

    const response = await fetch(`${PRIVATE_API_URL}/gg/v1/districts/${params.districtSlug}`)
    const data = await response.json()

    switch (response.status) {
        case 200:
            return {
                name: data.name,
                info: data.info,
                images: data.images,
                places: data.topPlaces,
                seo: parentData.seo,
            }
        default:
    }
}