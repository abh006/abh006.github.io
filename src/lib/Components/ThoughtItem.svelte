<script lang="ts">
	import { DateTime } from 'luxon';
	export let title: string;
	export let message: string;
	export let createdOn: Date;
	export let id: string;
</script>

<a href="/t/{id}">
	<div class="flex flex-col py-2 my-1">
		<span class="text-base font-medium capitalize">{title}</span>
		<div class="flex flex-row justify-between">
			<p class="max-w-[50%] text-sm overflow-hidden text-ellipsis truncate text-slate-600">
				{message}
			</p>
			<span class="text-sm text-slate-400"
				>{DateTime.fromJSDate(createdOn).toLocaleString(DateTime.DATE_MED)}</span
			>
		</div>
	</div>
</a>
