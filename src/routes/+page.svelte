<main class="h-full flex justify-center p-8">
	<div class="card w-3/4 lg:w-3/5 shadow-lg bg-base-100">
		<div class="card-body space-y-8">
			<h1 class="text-4xl font-bold">เที่ยวไร้ฝน</h1>
			<form class="grid grid-cols-2 gap-4 items-center">
				<label for="lat">ละติจูด</label>
				<input class="input input-bordered" type="number" id="lat" />
				<label for="lon">ลองจิจูด</label>
				<input class="input input-bordered" type="number" id="lon" />
				<div />
				<div class="text-right space-y-2">
					<button class="btn btn-primary">ใส่ตำแหน่งปัจจุบัน</button>
					<span class="text-xs block">* ต้องการใช้ GPS</span>
				</div>
				<label for="province">จังหวัด</label>
				<input id="province" type="text" class="input input-bordered" />
				<label for="keywords">คีย์เวิร์ด</label>
				<input class="col-span-2 input input-bordered" id="keywords" />
			</form>
			<button class="btn btn-success">Search</button>
		</div>
	</div>
</main>

<style>
</style>
