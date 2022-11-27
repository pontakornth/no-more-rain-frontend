<script>
	import { page } from '$app/stores';
</script>

<main class="flex min-h-screen h-full bg-base-200">
	<div class="text-center m-auto text-4xl text-error">
		<h1>{$page.error.message}</h1>
	</div>
</main>
