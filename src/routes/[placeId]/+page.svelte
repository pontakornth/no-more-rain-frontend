<script>
	import { browser } from '$app/environment';
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import Sunny from '~icons/mdi/weather-sunny';
	import { constructAddress } from '../../lib/api';
	import { weatherToIcon } from './icon';

	// TODO: Use Real data

	const placeInfo = {
		introduction:
			'เดอะ สีลมแกลเลอเรีย อาร์ตสเปซ เป็นห้องแสดงนิทรรศการหมุนเวียนการรวมผลงานทางศิลปะที่มากที่สุด ใหญ่ที่สุด และหลากหลายที่สุด',
		detail:
			'พื้นที่แสดงงานศิลปะที่จัดเป็นนิทรรศการหมุนเวียน โดยขึ้นชื่อว่าเป็นสถานที่รวบรวมผลงานศิลปะที่มากที่สุด ใหญ่ที่สุด และหลากหลายที่สุดแห่งหนึ่งของกรุงเทพมหานคร นอกจากจะเป็นแหล่งชุมนุมของ คนรักงานศิลป์แล้ว ยังเป็นสถานที่จุดประกายความคิดและสร้างแรงบันดาลใจใหม่ ๆ ให้แก่ผู้สนใจได้อีกมากมาย สำหรับนิทรรศการส่วนใหญ่ภายในแกลอรีแห่งนี้ ส่วนใหญ่เป็นงานศิลปะแนวร่วมสมัยและศิลปะสมัยใหม่ผสมผสานกันอย่างหลากหลาย นอกจากนี้ ภายในอาคารยังมีสิ่งอำนวยความสะดวกให้แก่นักท่องเที่ยวอีกมากมาย ครบครันไปด้วยร้านค้าต่าง ๆ ร้านอาหาร ส่วนบริเวณใกล้เคียง ยังเดินทางต่อไปยังแหล่งช้อปปิ้ง หรือย่านธุรกิจอื่น ๆ ได้อย่างง่ายดาย ที่ตั้ง : 919/1 ถนนสีลม เขตบางรัก กรุงเทพฯ สอบถามข้อมูล โทร.0 2630 3006-7'
	};

	const contact = {
		phones: ['0999999999', '0123456789'],
		fax: '99999999',
		mobiles: ['1111111110', '2222222220'],
		emails: ['example@mail.com', 'email@example.com'],
		urls: ['https://google.com', 'https://dev.to']
	};
	const location = {
		address: '919/1 ถนนสีลม',
		sub_district: 'สีลม',
		district: 'บางรัก',
		province: 'กรุงเทพมหานคร',
		postcode: '10500'
	};
	const weatherData = [
		{
			avg_pm10: 31,
			avg_pm25: 95,
			date: '2022-11-27',
			temp_max: 22.01,
			temp_min: 16.04,
			weather_cond: 4
		},
		{
			avg_pm10: 29,
			avg_pm25: 90,
			date: '2022-11-28',
			temp_max: 23.14,
			temp_min: 16.95,
			weather_cond: 4
		},
		{
			avg_pm10: 22,
			avg_pm25: 75,
			date: '2022-11-29',
			temp_max: 27.25,
			temp_min: 19.55,
			weather_cond: 3
		},
		{
			avg_pm10: 29,
			avg_pm25: 90,
			date: '2022-11-30',
			temp_max: 26.37,
			temp_min: 18.56,
			weather_cond: 3
		},
		{
			avg_pm10: 32,
			avg_pm25: 99,
			date: '2022-12-01',
			temp_max: 23.34,
			temp_min: 13.56,
			weather_cond: 3
		},
		{
			avg_pm10: 29,
			avg_pm25: 92,
			date: '2022-12-02',
			temp_max: 20.82,
			temp_min: 12.22,
			weather_cond: 3
		},
		{
			avg_pm10: 51,
			avg_pm25: 145,
			date: '2022-12-03',
			temp_max: 23.24,
			temp_min: 12.23,
			weather_cond: 1
		}
	];

	const tempChartData = {
		labels: weatherData.map((w) => w.date),
		datasets: [
			{
				type: 'line',
				label: 'อุณหภูมิสูงสุด',
				data: weatherData.map((w) => w.temp_max)
			},
			{
				type: 'line',
				label: 'อุณหภูมิตำ่สุด',
				data: weatherData.map((w) => w.temp_min)
			}
		]
	};

	const airQualityChartData = {
		labels: weatherData.map((w) => w.date),
		datasets: [
			{
				type: 'line',
				label: 'PM2.5',
				data: weatherData.map((w) => w.avg_pm25)
			},
			{
				type: 'line',
				label: 'PM10',
				data: weatherData.map((w) => w.avg_pm10)
			}
		]
	};
	/**  @type {HTMLCanvasElement} */
	let tempChart;
	/**  @type {HTMLCanvasElement} */
	let airQualityChart;

	onMount(() => {
		if (browser) {
			new Chart(tempChart, {
				data: tempChartData
			});
			new Chart(airQualityChart, {
				data: airQualityChartData
			});
		}
	});
</script>

<main class="h-full flex flex-col items-center justify-center p-0 lg:p-8 space-y-8">
	<div class="card card-compact card-bordered w-full lg:w-3/5">
		<figure class="card-image">
			<img
				src="https://tatapi.tourismthailand.org/tatfs/Image/custompoi/Thumbnail/P03000001.jpg"
				alt="พระตำหนัก"
			/>
		</figure>
		<div class="card-body flex flex-col space-y-8">
			<header class="space-y-4">
				<h1 class="text-4xl card-title font-bold">พระตำหนัก</h1>
				{#if placeInfo.introduction != null && placeInfo.introduction.length > 0}
					<h2 class="text-xl font-semibold">{placeInfo.introduction}</h2>
				{/if}
				<p class="text-lg text-neutral">{constructAddress(location)}</p>
				{#if (placeInfo.detail != null) & (placeInfo.detail.length > 0)}
					<p class="text-lg text-info-content">
						{placeInfo.detail}
					</p>
				{/if}
			</header>
			<div class="space-y-4">
				<h2 class="text-2xl font-bold">ข้อมูลติดต่อ</h2>
				{#if contact.phones != null && contact.phones.length > 0}
					<h3 class="text-xl font-semibold">โทรศัพท์</h3>
					<ul class="list-disc pl-8">
						{#each contact.phones as phone}
							<li>{phone}</li>
						{/each}
					</ul>
				{/if}
				{#if contact.mobiles != null && contact.mobiles.length > 0}
					<h3 class="text-xl font-semibold">มือถือ</h3>
					<ul class="list-disc pl-8">
						{#each contact.mobiles as phone}
							<li>{phone}</li>
						{/each}
					</ul>
				{/if}
				{#if contact.emails != null && contact.emails.length > 0}
					<h3 class="text-xl font-semibold">อีเมล</h3>
					<ul class="list-disc pl-8">
						{#each contact.emails as email}
							<li>{email}</li>
						{/each}
					</ul>
				{/if}
				{#if contact.urls != null && contact.urls.length > 0}
					<h3 class="text-xl font-semibold">เว็บ</h3>
					<ul class="list-disc pl-8">
						{#each contact.urls as url}
							<li>{url}</li>
						{/each}
					</ul>
				{/if}
				{#if contact.fax != null}
					<h3 class="text-xl font-semibold">แฟ็กซ์</h3>
					<p>{contact.fax}</p>
				{/if}
			</div>
			<div class="space-y-4">
				<h2 class="text-2xl font-bold">สภาพอากาศ</h2>
				<h3 class="text-xl font-semibold">สภาพอากาศโดยรวม</h3>
				<ul class="grid grid-cols-2 lg:grid-cols-7 gap-8 text-center">
					{#each weatherData as w (w.date)}
						<li>
							<svelte:component this={weatherToIcon[w.weather_cond]} class="text-4xl inline" />
							<p>{w.date}</p>
						</li>
					{/each}
				</ul>
				<h3 class="text-xl font-semibold">อุณหภูมิ</h3>
				<canvas id="tempChart" bind:this={tempChart} />
				<h3 class="text-xl font-semibold">คุณภาพอากาศ</h3>
				<canvas id="airQualityChart" bind:this={airQualityChart} />
			</div>
		</div>
	</div>
</main>
