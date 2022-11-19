<script lang="ts">
	import '../app.css';
</script>

<div class="flex flex-row columns-3">
	<div class="md:w-full xs:w-0" />
	<div class="w-full flex flex-col mt-10 py-5 px-5">
		<div>
			<p class="text-lg justify-center">itsabhinav.in</p>
		</div>
		<slot />
	</div>
	<div class="md:w-full xs:w-0" />
</div>
