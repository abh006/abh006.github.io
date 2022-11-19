<script lang="ts">
	import { DateTime } from 'luxon';
	export let title: string;
	export let message: string;
	export let createdOn: Date;
</script>

<div class="flex flex-col bordered border-2 border-slate-100 p-2">
	<span class="text-base font-medium">{title}</span>
	<div class="flex flex-row justify-between">
		<p class="max-w-[50%] text-sm overflow-hidden text-ellipsis truncate">{message}</p>
		<span class="text-sm">{DateTime.fromJSDate(createdOn).toLocaleString(DateTime.DATE_MED)}</span>
	</div>
</div>

<style>
</style>
