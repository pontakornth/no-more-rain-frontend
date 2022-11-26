<script>
	import { provinces } from '$lib/provinces';
	import { searchAttractions } from '$lib/api';
	let latitude = 0;
	let longitude = 0;
	$: geolocation = `${latitude},${longitude}`;
	let province = 'กรุงเทพมหานคร';
	let keywords = '';
	let errorMessage = '';
	let places = [];

	$: valid = keywords.length >= 2;
	$: console.log(places);

	function getCurrentLocation() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					latitude = position.coords.latitude;
					longitude = position.coords.longitude;
				},
				(err) => {}
			);
		}
	}
	async function search() {
		try {
			const response = await searchAttractions(keywords, geolocation, 9000, province);
			if (response.status === 404) {
				errorMessage = 'ไม่มีสถานที่';
				return;
			}
			places = response.data;
		} catch (e) {
			console.error(e);
		}
	}
</script>

<main class="h-full flex flex-col items-center justify-center p-8 space-y-8">
	<div class="card w-3/4 lg:w-3/5 shadow-lg bg-base-100">
		<div class="card-body space-y-8">
			<h1 class="text-4xl font-bold">เที่ยวไร้ฝน</h1>
			<form class="grid grid-cols-2 gap-4 items-center">
				<label for="lat">ละติจูด</label>
				<input bind:value={latitude} class="input input-bordered" type="number" id="lat" />
				<label for="lon">ลองจิจูด</label>
				<input bind:value={longitude} class="input input-bordered" type="number" id="lon" />
				<div />
				<div class="text-right space-y-2">
					<button on:click|preventDefault={getCurrentLocation} class="btn btn-primary"
						>ใส่ตำแหน่งปัจจุบัน</button
					>
					<span class="text-xs block">* ต้องการใช้ GPS</span>
				</div>
				<label for="province">จังหวัด</label>
				<select bind:value={province} id="province" class="select select-bordered text-right">
					{#each provinces as province (province)}
						<option value={province}>
							{province}
						</option>
					{/each}
				</select>
				<label for="keywords">คีย์เวิร์ด</label>
				<input
					bind:value={keywords}
					class="col-span-2 text-left input input-bordered"
					id="keywords"
				/>
			</form>
			<button on:click|preventDefault={search} disabled={!valid} class="btn btn-success"
				>Search</button
			>
		</div>
	</div>
	<div class="grid grid-cols-2 gap-8 w-3/4 lg:w-3/5">
		<div class="card card-bordered card-compact">
			<figure>
				<img
					src="https://tatapi.tourismthailand.org/tatfs/Image/custompoi/Thumbnail/P08013991.jpg"
					alt="tour"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">คาเฟ่เต้าหู้</h2>
				<p>คาเฟ่ตัวอย่างที่เอามาจาก API</p>
				<div class="card-actions justify-end">
					<button class="btn btn-info">รายละเอียด</button>
				</div>
			</div>
		</div>
		<div class="card card-bordered card-compact">
			<figure>
				<img
					src="https://tatapi.tourismthailand.org/tatfs/Image/custompoi/Thumbnail/P08013991.jpg"
					alt="tour"
				/>
			</figure>
			<div class="card-body">
				<h2 class="card-title">คาเฟ่เต้าหู้</h2>
				<p>คาเฟ่ตัวอย่างที่เอามาจาก API</p>
				<div class="card-actions justify-end">
					<button class="btn btn-info">รายละเอียด</button>
				</div>
			</div>
		</div>
	</div>
</main>

<style>
	:where(.input) {
		@apply text-right;
	}
</style>
