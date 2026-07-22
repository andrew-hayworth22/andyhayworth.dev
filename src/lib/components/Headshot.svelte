<script lang="ts">
	import { asset } from '$app/paths';

	const headshotURL = asset('/headshot.jpeg');
</script>

<div class="relative h-82.5 w-67.5 rounded-2xl border-line-3 bg-surface p-2">
	<img
		id="hero-headshot"
		src={headshotURL}
        alt="headshot"
        class="w-full h-full object-cover rounded-2xl"
	/>
	<div
		style="position:absolute; top:-1px; left:20px; transform:translateY(-50%); background:#0f1210; padding:0 8px; font-family:'JetBrains Mono',monospace; font-size:11px; color:oklch(0.82 0.16 150);"
	>
		andy.jpeg
	</div>
</div>
<div
	style="display:flex; justify-content:space-between; margin-top:12px; font-family:'JetBrains Mono',monospace; font-size:11px; color:#5f6a62;"
>
	<span>KENT, OH</span><span>EST. 2019</span>
</div>
