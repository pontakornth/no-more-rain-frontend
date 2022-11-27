/**
 *  1 = ท้องฟ้าแจ่มใส (Clear)
 *  2 = มีเมฆบางส่วน (Partly cloudy)
 *  3 = เมฆเป็นส่วนมาก (Cloudy)
 *  4 = มีเมฆมาก (Overcast)
 *  5 = ฝนตกเล็กน้อย (Light rain)
 *  6 = ฝนปานกลาง (Moderate rain)
 *  7 = ฝนตกหนัก (Heavy rain)
 *  8 = ฝนฟ้าคะนอง (Thunderstorm)
 *  9 = อากาศหนาวจัด (Very cold)
 *  10 = อากาศหนาว (Cold)
 *  11 = อากาศเย็น (Cool)
 *  12 = อากาศร้อนจัด (Very hot)
 */

import Sunny from '~icons/mdi/weather-sunny';
import PartylyCloudy from '~icons/mdi/weather-partly-cloudy';
import Cloudy from '~icons/mdi/weather-cloudy';
// LIght rain
import PartlyRainly from '~icons/mdi/weather-partly-rainy';
// Moderate Rain
import Rainy from '~icons/mdi/weather-rainy';
// Heavy rain
import HeavyRain from '~icons/mdi/weather-pouring';
// Thunderstorm
import Thunderstorm from '~icons/mdi/weather-lightning-rainy';
// Very Cold
import VeryCold from '~icons/mdi/weather-snowy-heavy'; // There is no snow in Thailand.
// Cold
import Cold from '~icons/mdi/weather-snowy'; // There is no snow in Thailand.
// Cool
import Cool from '~icons/mdi/weather-partly-snowy'; // There is no snow in Thailand
// Very hot
import SunnyAlert from '~icons/mdi/weather-sunny-alert';

export const weatherToIcon = {
	1: Sunny,
	2: PartylyCloudy,
	3: Cloudy,
	4: Cloudy,
	5: PartlyRainly,
	6: Rainy,
	7: HeavyRain,
	8: Thunderstorm,
	9: VeryCold,
	10: Cold,
	11: Cool,
	12: SunnyAlert
};
