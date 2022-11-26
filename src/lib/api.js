import axios from 'axios';

const PREFIX = 'http://localhost:8080/no-more-rain/v1';

/**
 * Get all attractions from the search
 * @param {String} keywords
 * @param {String} geolocation
 * @param {number} radius
 * @param {String} province
 */
export async function searchAttractions(keywords, geolocation, radius, province) {
	return axios.get(PREFIX + '/search', {
		params: {
			keywords,
			geolocation,
			provincename: province,
			destination: province,
			search_radius: radius
		}
	});
}
