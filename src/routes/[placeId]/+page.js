import axios from 'axios';
import { getAttractionDetail } from '../../lib/api';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		// return await getAttractionDetail(params.placeId);
	} catch (e) {
		// TODO: Error handling
		console.error(e);
	}
}
