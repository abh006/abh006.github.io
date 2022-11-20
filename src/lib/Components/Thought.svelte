<script lang="ts">
	import { DateTime } from 'luxon';

	export let title: string;
	export let createdOn: Date;
	export let content: string;
</script>

<div class="flex flex-col">
	<span class="text-xl font-bold"
		>{title
			.split(' ')
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ')}</span
	>
	<span class="text-sm mb-5 text-slate-400"
		>{DateTime.fromJSDate(createdOn).toLocaleString(DateTime.DATE_MED)}</span
	>
	<p class="flex flex-col overflow-x-auto overflow-y-hidden">
		{@html content}
	</p>
</div>
