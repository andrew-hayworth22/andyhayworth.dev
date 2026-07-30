<script lang="ts">
	import { reveal } from '$lib/actions/reveal';

	let { title, items }: { title: string; items: string[] } = $props();
</script>

<div
	use:reveal
	class="translate-y-5.5 rounded-2xl border border-line-2 bg-surface p-7 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.2,0.7,0.3,1)] max-[720px]:p-6"
>
	<div class="mb-4.5 font-mono text-xs text-mint">{title}</div>
	<div class="flex flex-wrap gap-2.25">
		{#each items as item (item)}
			<span
				class="rounded-md border border-line-3 bg-ink px-3 py-2 font-mono text-xs text-muted-5 transition-colors duration-200 hover:border-mint hover:text-fg"
				>{item}</span
			>
		{/each}
	</div>
</div>
