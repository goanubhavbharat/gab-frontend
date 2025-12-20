import { PRIVATE_API_URL } from "$env/static/private";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ params }) => {

    const response = await fetch(`${PRIVATE_API_URL}/gg/v1/states/${params.stateSlug}/districts`)
    const data = await response.json()

    switch (response.status) {
        case 200:
            return {
                name: data.name,
                districts: data.districts,
                seo: data.seo,
                params: {
                    state: params.stateSlug,
                }
            }
        default:
    }
}