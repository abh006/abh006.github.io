<script lang="ts">
	import ThoughtItem from '$lib/Components/ThoughtItem.svelte';
	import { getThoughts } from '$lib/db';
</script>

<div class="flex flex-col">
	{#await getThoughts()}
		<p>Loading thoughts...</p>
	{:then thoughts}
		{#each thoughts as { title, message, createdOn, id }}
			<ThoughtItem {title} {message} {createdOn} {id} />
		{/each}
	{:catch}
		<p>Error loading thoughts</p>
	{/await}
</div>
