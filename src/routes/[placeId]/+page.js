import axios from 'axios';
import { getAttractionDetail } from '../../lib/api';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		const result = await getAttractionDetail(params.placeId);
		return result.data;
	} catch (e) {
		// TODO: Error handling
		console.error(e);
	}
}
