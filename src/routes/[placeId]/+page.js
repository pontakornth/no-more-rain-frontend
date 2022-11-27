import { error } from '@sveltejs/kit';
import { getAttractionDetail } from '../../lib/api';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const result = await getAttractionDetail(params.placeId);
		return result.data;
	} catch (e) {
		// TODO: Error handling
		console.error(e);
		if (e.response) {
			if (e.response.status == 404) {
				throw error(404, {
					message: 'ไม่มีสถานที่นี้'
				});
			}
		}
	}
}
