<script lang="ts">
	import { page } from '$app/stores';
	import { getThought } from '$lib/db';
	import { DateTime } from 'luxon';
	import SvelteMarkdown from 'svelte-markdown';

	const thoughtId: string = $page.params.id;
</script>

{#await getThought(thoughtId)}
	<p>Loading the thought...</p>
{:then thought}
	<div class="flex flex-col">
		<span class="text-xl font-bold">{thought.title}</span>
		<span class="text-sm mb-5 text-slate-400"
			>{DateTime.fromJSDate(thought.createdOn).toLocaleString(DateTime.DATE_MED)}</span
		>
		<p class="flex flex-col overflow-x-auto overflow-y-hidden">
			{@html thought.content}
		</p>
	</div>
{:catch}
	<p>Error loading thought</p>
{/await}
