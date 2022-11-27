<script>
	import { browser } from '$app/environment';
	import { Chart } from 'chart.js/auto';
	import { onMount } from 'svelte';
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

<main class="h-full flex flex-col items-center justify-center p-8 space-y-8">
	<div class="card card-compact card-bordered w-3/4 lg:w-3/5">
		<figure class="card-image">
			<img
				src="https://tatapi.tourismthailand.org/tatfs/Image/custompoi/Thumbnail/P03000001.jpg"
				alt="พระตำหนัก"
			/>
		</figure>
		<div class="card-body flex flex-col space-y-8">
			<header>
				<h1 class="text-4xl card-title font-bold">พระตำหนัก</h1>
				<h2 class="text-xl font-semibold">เชียงใหม่</h2>
			</header>
			<div class="space-y-4">
				<h2 class="text-xl font-semibold">อุณหภูมิ</h2>
				<canvas id="tempChart" bind:this={tempChart} />
				<h2 class="text-xl font-semibold">คุณภาพอากาศ</h2>
				<canvas id="airQualityChart" bind:this={airQualityChart} />
				<h2 class="text-xl font-semibold">สภาพอากาศโดยรวม</h2>
				<ul class="flex justify-evenly items-center">
					{#each weatherData as w (w.date)}
						<li>
							<p>{w.date}</p>
							<p>{w.weather_cond}</p>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</main>
