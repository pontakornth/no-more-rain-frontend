<script>
	import { browser } from '$app/environment';
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import Sunny from '~icons/mdi/weather-sunny';
	import { constructAddress } from '../../lib/api';
	import { weatherToIcon } from './icon';

	// TODO: Use Real data

	/** @type {import(''./$types').PageData}*/
	export let data;

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

	const tempChartData = {
		labels: data.forecasts.map((w) => w.date),
		datasets: [
			{
				type: 'line',
				label: 'อุณหภูมิสูงสุด',
				data: data.forecasts.map((w) => w.temp_max)
			},
			{
				type: 'line',
				label: 'อุณหภูมิตำ่สุด',
				data: data.forecasts.map((w) => w.temp_min)
			}
		]
	};

	const airQualityChartData = {
		labels: data.forecasts.map((w) => w.date),
		datasets: [
			{
				type: 'line',
				label: 'PM2.5',
				data: data.forecasts.map((w) => w.avg_pm25)
			},
			{
				type: 'line',
				label: 'PM10',
				data: data.forecasts.map((w) => w.avg_pm10)
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

<svelte:head>
	<title>{data.place_name}</title>
</svelte:head>

<main class="h-full flex flex-col items-center justify-center p-0 lg:p-8 space-y-8">
	<div class="card card-compact card-bordered w-full lg:w-3/5">
		{#if data.thumbnail_url && data.thumbnail_url.length > 0}
			<figure class="card-image">
				<img src={data.thumbnail_url} alt={data.place_name} />
			</figure>
		{/if}
		<div class="card-body flex flex-col space-y-8">
			<header class="space-y-4">
				<h1 class="text-4xl card-title font-bold">{data.place_name}</h1>
				{#if data.place_info != null && data.place_info.length > 0}
					<h2 class="text-xl font-semibold">{data.place_info.introduction}</h2>
				{/if}
				<p class="text-lg text-neutral">{constructAddress(data.location)}</p>
				{#if (data.place_detail != null) & (data.place_detail > 0)}
					<p class="text-lg text-info-content">
						{data.place_detail}
					</p>
				{/if}
			</header>
			<div class="space-y-4">
				<h2 class="text-2xl font-bold">ข้อมูลติดต่อ</h2>
				{#if data.contact.phones != null && data.contact.phones.length > 0}
					<h3 class="text-xl font-semibold">โทรศัพท์</h3>
					<ul class="list-disc pl-8">
						{#each data.contact.phones as phone}
							<li>{phone}</li>
						{/each}
					</ul>
				{/if}
				{#if data.contact.mobiles != null && data.contact.mobiles.length > 0}
					<h3 class="text-xl font-semibold">มือถือ</h3>
					<ul class="list-disc pl-8">
						{#each data.contact.mobiles as phone}
							<li>{phone}</li>
						{/each}
					</ul>
				{/if}
				{#if data.contact.emails != null && data.contact.emails.length > 0}
					<h3 class="text-xl font-semibold">อีเมล</h3>
					<ul class="list-disc pl-8">
						{#each data.contact.emails as email}
							<li>{email}</li>
						{/each}
					</ul>
				{/if}
				{#if data.contact.urls != null && data.contact.urls.length > 0}
					<h3 class="text-xl font-semibold">เว็บ</h3>
					<ul class="list-disc pl-8">
						{#each data.contact.urls as url}
							<li>{url}</li>
						{/each}
					</ul>
				{/if}
				{#if data.contact.fax != null}
					<h3 class="text-xl font-semibold">แฟ็กซ์</h3>
					<p>{data.contact.fax}</p>
				{/if}
			</div>
			<div class="space-y-4">
				<h2 class="text-2xl font-bold">สภาพอากาศ</h2>
				<h3 class="text-xl font-semibold">สภาพอากาศโดยรวม</h3>
				<ul class="grid grid-cols-2 lg:grid-cols-7 gap-8 text-center">
					{#each data.forecasts as w (w.date)}
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
