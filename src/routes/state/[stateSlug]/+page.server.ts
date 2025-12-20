import type { PageServerLoad } from "./$types";
import { PRIVATE_API_URL } from "$env/static/private";

export const load: PageServerLoad = async ({ params }) => {

    const response = await fetch(`${PRIVATE_API_URL}/gg/v1/states/${params.stateSlug}`)
    const data = await response.json()

    switch (response.status) {
        case 200:
            return {
                name: data.name,
                heading: data.heading,
                note: data.note,
                images: data.images,
                regions: data?.stateRegions,
                districts: data.topDistricts,
                seo: data.seo,
                params: {
                    state: params.stateSlug,
                }
            }
        default:
    }
}