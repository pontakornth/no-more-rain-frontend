import axios from 'axios';
import { getAttractionDetail } from '../../lib/api';

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	try {
		// TODO: Remove comment once used
		// return await getAttractionDetail(params.placeId);
	} catch (e) {
		// TODO: Error handling
		console.error(e);
	}
}
