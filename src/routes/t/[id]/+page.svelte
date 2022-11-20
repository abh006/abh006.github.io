<script lang="ts">
	import { page } from '$app/stores';
	import Thought from '$lib/Components/Thought.svelte';
	import { getThought } from '$lib/db';

	const thoughtId: string = $page.params.id;
</script>

{#await getThought(thoughtId)}
	<p>Loading the thought...</p>
{:then thought}
	<Thought title={thought.title} content={thought.content} createdOn={thought.createdOn} />
{:catch}
	<p>Error loading thought</p>
{/await}
