<script lang="ts">
	import { createThought } from '$lib/db';
	import { onMount } from 'svelte';
	import '../app.css';

	// onMount(async () => {
	// 	await createThought({
	// 		title: 'hello',
	// 		message: 'hoy',
	// 		content: 'hola hola hola',
	// 		createdOn: new Date()
	// 	});
	// });
</script>

<div class="flex flex-row columns-3">
	<div class="md:w-1/4 xs:w-0" />
	<div class="w-full md:w-1/2 flex flex-col mt-2 py-5 px-5">
		<div class="mb-10">
			<a href="/" class="href">
				<p class="text-lg text-slate-600 justify-center">
					its<span class="text-2xl text-black">abhinav</span>.in
				</p>
			</a>
		</div>
		<slot />
	</div>
	<div class="md:w-1/4 xs:w-0" />
</div>
